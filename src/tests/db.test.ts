import { describe, it, expect } from "vitest";
import { createServiceRequest, getServiceRequestById } from "@/db/sqlite";
import { AtendimentoFormData } from "@/schemas/atendimento";

describe("SQLite Service Requests Persistence", () => {
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

  it("should create and persist a service request and generate a valid ID", async () => {
    const record = await createServiceRequest(testData);
    expect(record).toBeDefined();
    expect(record.id.startsWith("KWL-")).toBe(true);
    expect(record.status).toBe("NEW");
    expect(record.full_name).toBe("Inácio Tembe");
    expect(record.company_name).toBe("Moçambique Automação");
    expect(record.service).toBe("energia-solar");
    expect(record.neighborhood).toBe("Mahate");
  });

  it("should retrieve a saved request by its ID", async () => {
    const record = await createServiceRequest(testData);
    const retrieved = await getServiceRequestById(record.id);
    expect(retrieved).toBeDefined();
    expect(retrieved?.id).toBe(record.id);
    expect(retrieved?.email).toBe("inacio@mocautomacao.co.mz");
  });
});
