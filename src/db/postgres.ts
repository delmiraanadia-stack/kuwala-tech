import { neon } from "@neondatabase/serverless";
import crypto from "crypto";
import { AtendimentoFormData, ServiceRequestRecord } from "@/schemas/atendimento";

export function getDbClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl || databaseUrl.trim() === "") {
    throw new Error(
      "DATABASE_URL is not configured. Please set the DATABASE_URL environment variable to connect to Neon PostgreSQL."
    );
  }
  return neon(databaseUrl);
}

export async function createServiceRequest(
  data: AtendimentoFormData
): Promise<ServiceRequestRecord> {
  const id = `KWL-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`;
  const now = new Date().toISOString();

  const record: ServiceRequestRecord = {
    id,
    request_type: data.requestType,
    full_name: data.fullName.trim(),
    company_name: data.requestType === "company" && data.companyName ? data.companyName.trim() : null,
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    service: data.service,
    neighborhood: data.neighborhood,
    reference_point: data.referencePoint.trim(),
    location_description: data.locationDescription.trim(),
    project_description: data.projectDescription.trim(),
    status: "NEW",
    created_at: now,
    updated_at: now,
  };

  const sql = getDbClient();

  await sql`
    INSERT INTO service_requests (
      id, request_type, full_name, company_name, email, phone, service,
      neighborhood, reference_point, location_description, project_description,
      status, created_at, updated_at
    ) VALUES (
      ${record.id},
      ${record.request_type},
      ${record.full_name},
      ${record.company_name},
      ${record.email},
      ${record.phone},
      ${record.service},
      ${record.neighborhood},
      ${record.reference_point},
      ${record.location_description},
      ${record.project_description},
      ${record.status},
      ${record.created_at},
      ${record.updated_at}
    );
  `;

  return record;
}

export async function getServiceRequestById(
  id: string
): Promise<ServiceRequestRecord | null> {
  const sql = getDbClient();

  const rows = await sql`
    SELECT
      id, request_type, full_name, company_name, email, phone, service,
      neighborhood, reference_point, location_description, project_description,
      status, created_at, updated_at
    FROM service_requests
    WHERE id = ${id}
    LIMIT 1;
  `;

  if (!rows || rows.length === 0) {
    return null;
  }

  const row = rows[0] as any;

  return {
    id: row.id,
    request_type: row.request_type,
    full_name: row.full_name,
    company_name: row.company_name,
    email: row.email,
    phone: row.phone,
    service: row.service,
    neighborhood: row.neighborhood,
    reference_point: row.reference_point,
    location_description: row.location_description,
    project_description: row.project_description,
    status: row.status,
    created_at: typeof row.created_at === "string" ? row.created_at : new Date(row.created_at).toISOString(),
    updated_at: typeof row.updated_at === "string" ? row.updated_at : new Date(row.updated_at).toISOString(),
  };
}
