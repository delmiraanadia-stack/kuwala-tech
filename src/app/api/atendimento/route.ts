import { NextRequest, NextResponse } from "next/server";
import { atendimentoSchema } from "@/schemas/atendimento";
import { createServiceRequest } from "@/db/sqlite";

// Simple in-memory IP rate limiter: max 10 requests per 5 minutes per IP
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  requestLog.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "RATE_LIMIT_EXCEEDED",
            message: "Demasiados pedidos enviados. Por favor aguarde 5 minutos antes de tentar novamente.",
          },
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Validate payload strictly against Zod Schema
    const validationResult = atendimentoSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path.join(".");
        fieldErrors[path] = err.message;
      });

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Dados de formulário inválidos.",
            fields: fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    // Persist to Database
    const record = await createServiceRequest(validationResult.data);

    return NextResponse.json(
      {
        success: true,
        requestId: record.id,
        message: "Pedido registado com sucesso no sistema da KUWALA TECH.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Unhandled error in /api/atendimento:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Ocorreu um erro interno ao registar o pedido no servidor. Tente novamente mais tarde.",
        },
      },
      { status: 500 }
    );
  }
}
