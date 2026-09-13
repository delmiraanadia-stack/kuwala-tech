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
});
