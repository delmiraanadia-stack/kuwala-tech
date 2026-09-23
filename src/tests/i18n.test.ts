import { describe, it, expect } from "vitest";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";

describe("i18n Dictionaries Parity", () => {
  it("should have all top-level sections in both PT and EN dictionaries", () => {
    const ptKeys = Object.keys(pt);
    const enKeys = Object.keys(en);
    expect(ptKeys.sort()).toEqual(enKeys.sort());
  });

  it("should have common navigation keys present in both", () => {
    expect(Object.keys(pt.nav).sort()).toEqual(Object.keys(en.nav).sort());
  });

  it("should have all form field labels in both PT and EN", () => {
    expect(Object.keys(pt.atendimento.form).sort()).toEqual(
      Object.keys(en.atendimento.form).sort()
    );
  });

  it("should have all validation error messages in both PT and EN", () => {
    expect(Object.keys(pt.atendimento.validation).sort()).toEqual(
      Object.keys(en.atendimento.validation).sort()
    );
  });

  it("should have all form error messages in both PT and EN", () => {
    expect(Object.keys(pt.atendimento.errors).sort()).toEqual(
      Object.keys(en.atendimento.errors).sort()
    );
  });

  it("should resolve validation error keys dynamically for both PT and EN", async () => {
    const { resolveValidationError } = await import("@/utils/validation");

    // Test canonical key
    expect(resolveValidationError("fullNameMin", pt)).toBe(
      "O nome completo deve conter pelo menos 2 caracteres."
    );
    expect(resolveValidationError("fullNameMin", en)).toBe(
      "Full name must contain at least 2 characters."
    );

    expect(resolveValidationError("emailRequired", pt)).toBe("Este campo é obrigatório.");
    expect(resolveValidationError("emailRequired", en)).toBe("This field is required.");

    expect(resolveValidationError("emailInvalid", pt)).toBe(
      "Introduza um endereço de email válido (exemplo: seu.nome@empresa.co.mz)."
    );
    expect(resolveValidationError("emailInvalid", en)).toBe(
      "Enter a valid email address (e.g., your.name@company.com)."
    );

    // Test legacy Portuguese fallback to English
    expect(
      resolveValidationError(
        "Introduza um endereço de email válido (exemplo: seu.nome@empresa.co.mz).",
        en
      )
    ).toBe("Enter a valid email address (e.g., your.name@company.com).");

    expect(
      resolveValidationError(
        "Descreva com detalhe a localização física das instalações.",
        en
      )
    ).toBe("Describe the physical location of the premises in detail.");
  });
});
