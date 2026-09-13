import fs from "fs";
import path from "path";
import crypto from "crypto";
import { AtendimentoFormData, ServiceRequestRecord } from "@/schemas/atendimento";

let dbInstance: any = null;

function getDatabase() {
  if (dbInstance) return dbInstance;

  const dbDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  const dbPath = process.env.DATABASE_PATH || path.join(dbDir, "kuwala.sqlite");

  try {
    // Use Node.js built-in DatabaseSync (available in Node 22+)
    const { DatabaseSync } = require("node:sqlite");
    const db = new DatabaseSync(dbPath);

    // Create table if not exists
    db.exec(`
      CREATE TABLE IF NOT EXISTS service_requests (
        id TEXT PRIMARY KEY,
        request_type TEXT NOT NULL,
        full_name TEXT NOT NULL,
        company_name TEXT,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT NOT NULL,
        neighborhood TEXT NOT NULL,
        reference_point TEXT NOT NULL,
        location_description TEXT NOT NULL,
        project_description TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'NEW',
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);

    dbInstance = db;
    return db;
  } catch (err) {
    console.error("Error initializing node:sqlite, falling back to JSON persistence:", err);
    return null;
  }
}

// Memory/JSON fallback for resilient operation if SQLite native module cannot open file
const jsonFallbackPath = path.join(process.cwd(), "data", "service_requests.json");

function fallbackSave(record: ServiceRequestRecord): void {
  const dbDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  let items: ServiceRequestRecord[] = [];
  if (fs.existsSync(jsonFallbackPath)) {
    try {
      items = JSON.parse(fs.readFileSync(jsonFallbackPath, "utf-8"));
    } catch {}
  }
  items.push(record);
  fs.writeFileSync(jsonFallbackPath, JSON.stringify(items, null, 2), "utf-8");
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

  const db = getDatabase();

  if (db) {
    const insertStmt = db.prepare(`
      INSERT INTO service_requests (
        id, request_type, full_name, company_name, email, phone, service,
        neighborhood, reference_point, location_description, project_description,
        status, created_at, updated_at
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `);

    insertStmt.run(
      record.id,
      record.request_type,
      record.full_name,
      record.company_name,
      record.email,
      record.phone,
      record.service,
      record.neighborhood,
      record.reference_point,
      record.location_description,
      record.project_description,
      record.status,
      record.created_at,
      record.updated_at
    );
  } else {
    fallbackSave(record);
  }

  return record;
}

export async function getServiceRequestById(id: string): Promise<ServiceRequestRecord | null> {
  const db = getDatabase();
  if (db) {
    const query = db.prepare(`SELECT * FROM service_requests WHERE id = ?`);
    const result = query.get(id);
    return (result as ServiceRequestRecord) || null;
  } else {
    if (!fs.existsSync(jsonFallbackPath)) return null;
    try {
      const items: ServiceRequestRecord[] = JSON.parse(fs.readFileSync(jsonFallbackPath, "utf-8"));
      return items.find((r) => r.id === id) || null;
    } catch {
      return null;
    }
  }
}
