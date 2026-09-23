import { describe, it, expect } from "vitest";
import { atendimentoSchema, PEMBA_NEIGHBORHOODS, SERVICE_KEYS } from "@/schemas/atendimento";

describe("Atendimento Schema Validation", () => {
  const validPersonalData = {
    requestType: "personal" as const,
    fullName: "Manuel Valigy",
    email: "manuel.valigy@gmail.com",
    phone: "+258841234567",
    service: "automacao-industrial" as const,
    neighborhood: "Wimbe" as const,
    referencePoint: "Próximo à praia de Wimbe",
    locationDescription: "Rua do Farol, Casa nº 12, portão azul",
    projectDescription: "Necessitamos de automatizar uma linha de bombagem de água com PLC e HMI.",
  };

  it("should validate a valid personal service request", () => {
    const result = atendimentoSchema.safeParse(validPersonalData);
    expect(result.success).toBe(true);
  });

  it("should validate a valid company service request with companyName", () => {
    const companyData = {
      ...validPersonalData,
      requestType: "company" as const,
      companyName: "Logística do Norte Lda",
    };
    const result = atendimentoSchema.safeParse(companyData);
    expect(result.success).toBe(true);
  });

  it("should fail for company request if companyName is missing or empty", () => {
    const invalidCompanyData = {
      ...validPersonalData,
      requestType: "company" as const,
      companyName: "",
    };
    const result = atendimentoSchema.safeParse(invalidCompanyData);
    expect(result.success).toBe(false);
    if (!result.success) {
      const companyError = result.error.errors.find((e) => e.path.includes("companyName"));
      expect(companyError).toBeDefined();
    }
  });

  it("should fail for invalid email format", () => {
    const invalidEmailData = {
      ...validPersonalData,
      email: "invalid-email-string",
    };
    const result = atendimentoSchema.safeParse(invalidEmailData);
    expect(result.success).toBe(false);
  });

  it("should reject invalid service keys not in the 9 official services", () => {
    const invalidServiceData = {
      ...validPersonalData,
      service: "servico-inventado" as any,
    };
    const result = atendimentoSchema.safeParse(invalidServiceData);
    expect(result.success).toBe(false);
  });

  it("should validate a service request with instrumentacao-industrial", () => {
    const instrumentationData = {
      ...validPersonalData,
      service: "instrumentacao-industrial" as const,
      projectDescription: "Calibração e comissionamento de transmissores de pressão e caudal 4-20mA HART.",
    };
    const result = atendimentoSchema.safeParse(instrumentationData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid neighborhood not in the 18 Pemba list", () => {
    const invalidNeighborhoodData = {
      ...validPersonalData,
      neighborhood: "Maputo Central" as any,
    };
    const result = atendimentoSchema.safeParse(invalidNeighborhoodData);
    expect(result.success).toBe(false);
  });

  it("should contain exactly 18 official neighborhoods in Pemba", () => {
    expect(PEMBA_NEIGHBORHOODS.length).toBe(18);
    expect(PEMBA_NEIGHBORHOODS).toContain("Alto Gingone");
    expect(PEMBA_NEIGHBORHOODS).toContain("Wimbe");
    expect(PEMBA_NEIGHBORHOODS).toContain("Paquitequete");
    expect(PEMBA_NEIGHBORHOODS).toContain("Outro bairro de Pemba");
  });

  it("should accept legitimate short names with 2 or 3 letters (Ali, Amy, Abu, Ed, Li)", () => {
    const shortNames = ["Ali", "Amy", "Abu", "Ed", "Li", "Bo"];
    shortNames.forEach((name) => {
      const res = atendimentoSchema.safeParse({
        ...validPersonalData,
        fullName: name,
      });
      expect(res.success).toBe(true);
    });
  });

  it("should reject 1-character names with fullNameMin code", () => {
    const res = atendimentoSchema.safeParse({
      ...validPersonalData,
      fullName: "A",
    });
    expect(res.success).toBe(false);
    if (!res.success) {
      const err = res.error.errors.find((e) => e.path.includes("fullName"));
      expect(err?.message).toBe("fullNameMin");
    }
  });

  it("should reject empty fullName with fullNameRequired code", () => {
    const res = atendimentoSchema.safeParse({
      ...validPersonalData,
      fullName: "   ",
    });
    expect(res.success).toBe(false);
    if (!res.success) {
      const err = res.error.errors.find((e) => e.path.includes("fullName"));
      expect(err?.message).toBe("fullNameRequired");
    }
  });

  it("should emit canonical error codes for empty vs invalid email", () => {
    const emptyEmailRes = atendimentoSchema.safeParse({
      ...validPersonalData,
      email: "",
    });
    expect(emptyEmailRes.success).toBe(false);
    if (!emptyEmailRes.success) {
      const err = emptyEmailRes.error.errors.find((e) => e.path.includes("email"));
      expect(err?.message).toBe("emailRequired");
    }

    const invalidEmailRes = atendimentoSchema.safeParse({
      ...validPersonalData,
      email: "invalido",
    });
    expect(invalidEmailRes.success).toBe(false);
    if (!invalidEmailRes.success) {
      const err = invalidEmailRes.error.errors.find((e) => e.path.includes("email"));
      expect(err?.message).toBe("emailInvalid");
    }
  });

  it("should contain exactly 9 official services including instrumentacao-industrial", () => {
    expect(SERVICE_KEYS.length).toBe(9);
    expect(SERVICE_KEYS).toContain("instrumentacao-industrial");
    expect(SERVICE_KEYS).toContain("automacao-industrial");
  });
});
