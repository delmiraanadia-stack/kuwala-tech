import { describe, it, expect } from "vitest";
import { atendimentoSchema } from "@/schemas/atendimento";
import { resolveValidationError } from "@/utils/validation";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";

describe("Manual Simulation of Form Validation & i18n Switching", () => {
  it("Scenario 1: Empty Form submission in PT produces all errors in Portuguese", () => {
    const emptyForm = {
      requestType: "personal",
      fullName: "",
      email: "",
      phone: "",
      service: "automacao-industrial",
      neighborhood: "Cimento",
      referencePoint: "",
      locationDescription: "",
      projectDescription: "",
    };

    const res = atendimentoSchema.safeParse(emptyForm);
    expect(res.success).toBe(false);
    if (!res.success) {
      const fieldErrors: Record<string, string> = {};
      res.error.errors.forEach((err) => {
        fieldErrors[err.path.join(".")] = err.message;
      });

      // Em PT:
      const ptFullName = resolveValidationError(fieldErrors["fullName"], pt);
      const ptEmail = resolveValidationError(fieldErrors["email"], pt);
      const ptPhone = resolveValidationError(fieldErrors["phone"], pt);
      const ptRef = resolveValidationError(fieldErrors["referencePoint"], pt);
      const ptLoc = resolveValidationError(fieldErrors["locationDescription"], pt);
      const ptProj = resolveValidationError(fieldErrors["projectDescription"], pt);

      expect(ptFullName).toBe("O nome completo é obrigatório.");
      expect(ptEmail).toBe("Este campo é obrigatório.");
      expect(ptPhone).toBe("Introduza um número de telefone válido.");
      expect(ptRef).toBe("Indique a zona ou ponto de referência (ex: Próximo à Escola Secundária / Rotunda).");
      expect(ptLoc).toBe("Descreva com detalhe a localização física das instalações.");
      expect(ptProj).toBe("Descreva o projecto ou problema técnico.");

      // Scenario 2: User clicks EN switcher without re-submitting -> errors flip to English!
      const enFullName = resolveValidationError(fieldErrors["fullName"], en);
      const enEmail = resolveValidationError(fieldErrors["email"], en);
      const enPhone = resolveValidationError(fieldErrors["phone"], en);
      const enRef = resolveValidationError(fieldErrors["referencePoint"], en);
      const enLoc = resolveValidationError(fieldErrors["locationDescription"], en);
      const enProj = resolveValidationError(fieldErrors["projectDescription"], en);

      expect(enFullName).toBe("Full name is required.");
      expect(enEmail).toBe("This field is required.");
      expect(enPhone).toBe("Enter a valid phone number.");
      expect(enRef).toBe("Enter the area or reference landmark (e.g., Near Secondary School / Roundabout).");
      expect(enLoc).toBe("Describe the physical location of the premises in detail.");
      expect(enProj).toBe("Describe the project or technical problem.");

      // Scenario 3: User clicks PT switcher again -> errors flip back to Portuguese!
      expect(resolveValidationError(fieldErrors["fullName"], pt)).toBe("O nome completo é obrigatório.");
      expect(resolveValidationError(fieldErrors["email"], pt)).toBe("Este campo é obrigatório.");
    }
  });

  it("Scenario 4: Invalid format errors (email, phone, 1-char name) in EN and toggle to PT", () => {
    const invalidForm = {
      requestType: "company",
      fullName: "A", // 1 char
      companyName: "X", // 1 char (< 2)
      email: "email-invalido",
      phone: "abc1234", // letters
      service: "instrumentacao-industrial",
      neighborhood: "Cimento",
      referencePoint: "AB", // < 3 chars
      locationDescription: "ABCD", // < 5 chars
      projectDescription: "Curto", // < 15 chars
    };

    const res = atendimentoSchema.safeParse(invalidForm);
    expect(res.success).toBe(false);
    if (!res.success) {
      const fieldErrors: Record<string, string> = {};
      res.error.errors.forEach((err) => {
        fieldErrors[err.path.join(".")] = err.message;
      });

      // In EN:
      expect(resolveValidationError(fieldErrors["fullName"], en)).toBe("Full name must contain at least 2 characters.");
      expect(resolveValidationError(fieldErrors["companyName"], en)).toBe("Company name is required for enterprise requests.");
      expect(resolveValidationError(fieldErrors["email"], en)).toBe("Enter a valid email address (e.g., your.name@company.com).");
      expect(resolveValidationError(fieldErrors["phone"], en)).toBe("Invalid phone number format.");
      expect(resolveValidationError(fieldErrors["referencePoint"], en)).toBe("Reference landmark must contain at least 3 characters.");
      expect(resolveValidationError(fieldErrors["locationDescription"], en)).toBe("Location description must contain at least 5 characters.");
      expect(resolveValidationError(fieldErrors["projectDescription"], en)).toBe("Describe your project or technical problem with at least 15 characters.");

      // Toggle to PT:
      expect(resolveValidationError(fieldErrors["fullName"], pt)).toBe("O nome completo deve conter pelo menos 2 caracteres.");
      expect(resolveValidationError(fieldErrors["companyName"], pt)).toBe("O nome da empresa é obrigatório para pedidos do tipo Empresa.");
      expect(resolveValidationError(fieldErrors["email"], pt)).toBe("Introduza um endereço de email válido (exemplo: seu.nome@empresa.co.mz).");
      expect(resolveValidationError(fieldErrors["phone"], pt)).toBe("Formato de telefone inválido.");
      expect(resolveValidationError(fieldErrors["referencePoint"], pt)).toBe("O ponto de referência deve conter pelo menos 3 caracteres.");
      expect(resolveValidationError(fieldErrors["locationDescription"], pt)).toBe("A descrição da localização deve conter pelo menos 5 caracteres.");
      expect(resolveValidationError(fieldErrors["projectDescription"], pt)).toBe("Descreva o seu projecto ou problema técnico com pelo menos 15 caracteres.");
    }
  });

  it("Scenario 5: Short names (Ali, Amy, Abu, Ed) are accepted and valid", () => {
    ["Ali", "Amy", "Abu", "Ed", "Li"].forEach((name) => {
      const res = atendimentoSchema.safeParse({
        requestType: "personal",
        fullName: name,
        email: "valid@email.com",
        phone: "+258841234567",
        service: "instrumentacao-industrial",
        neighborhood: "Wimbe",
        referencePoint: "Zona de Wimbe",
        locationDescription: "Rua do Farol, 123",
        projectDescription: "Calibração de instrumentação industrial com padrões certificados.",
      });
      expect(res.success).toBe(true);
    });
  });
});
