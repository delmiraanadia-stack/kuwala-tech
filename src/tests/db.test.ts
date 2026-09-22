import { describe, it, expect, vi, afterEach } from "vitest";
import { AtendimentoFormData } from "@/schemas/atendimento";

describe("PostgreSQL Neon Service Requests Persistence", () => {
  const originalEnv = process.env.DATABASE_URL;

  const testData: AtendimentoFormData = {
    requestType: "company",
    fullName: "Inácio Tembe",
    companyName: "Moçambique Automação",
    email: "inacio@mocautomacao.co.mz",
    phone: "+258821112233",
    service: "energia-solar",
    neighborhood: "Mahate",
    referencePoint: "Zona Industrial de Mahate",
    locationDescription: "Armazém 7, Portão Verde",
    projectDescription: "Dimensionamento e instalação de sistema solar fotovoltaico de 15kWp com baterias LiFePO4.",
  };

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.DATABASE_URL = originalEnv;
    } else {
      delete process.env.DATABASE_URL;
    }
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it("should throw a clear configuration error when DATABASE_URL is not configured", async () => {
    delete process.env.DATABASE_URL;
    vi.resetModules();
    const { createServiceRequest, getDbClient } = await import("@/db/postgres");

    expect(() => getDbClient()).toThrow(/DATABASE_URL is not configured/);
    await expect(createServiceRequest(testData)).rejects.toThrow(/DATABASE_URL is not configured/);
  });

  it("should create, persist and retrieve a service request when DATABASE_URL is present", async () => {
    process.env.DATABASE_URL = "postgres://test_user:test_pass@localhost:5432/test_db";

    const mockStore = new Map<string, any>();

    vi.doMock("@neondatabase/serverless", () => ({
      neon: vi.fn(() => {
        return async (stringsOrQuery: any, ...values: any[]) => {
          let params: any[] = [];
          if (Array.isArray(stringsOrQuery) && "raw" in stringsOrQuery) {
            params = values;
          } else if (Array.isArray(values[0])) {
            params = values[0];
          } else {
            params = values;
          }

          if (params.length >= 14) {
            const [
              id,
              request_type,
              full_name,
              company_name,
              email,
              phone,
              service,
              neighborhood,
              reference_point,
              location_description,
              project_description,
              status,
              created_at,
              updated_at,
            ] = params;
            const record = {
              id,
              request_type,
              full_name,
              company_name,
              email,
              phone,
              service,
              neighborhood,
              reference_point,
              location_description,
              project_description,
              status,
              created_at,
              updated_at,
            };
            mockStore.set(id, record);
            return [record];
          }

          if (params.length === 1) {
            const found = mockStore.get(params[0]);
            return found ? [found] : [];
          }

          return [];
        };
      }),
    }));

    vi.resetModules();
    const { createServiceRequest, getServiceRequestById } = await import("@/db/postgres");

    const record = await createServiceRequest(testData);
    expect(record).toBeDefined();
    expect(record.id.startsWith("KWL-")).toBe(true);
    expect(record.status).toBe("NEW");
    expect(record.full_name).toBe("Inácio Tembe");
    expect(record.company_name).toBe("Moçambique Automação");
    expect(record.service).toBe("energia-solar");
    expect(record.neighborhood).toBe("Mahate");

    const retrieved = await getServiceRequestById(record.id);
    expect(retrieved).toBeDefined();
    expect(retrieved?.id).toBe(record.id);
    expect(retrieved?.email).toBe("inacio@mocautomacao.co.mz");
    expect(retrieved?.full_name).toBe("Inácio Tembe");
  });
});
