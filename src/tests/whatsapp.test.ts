import { describe, it, expect } from "vitest";
import { buildWhatsAppMessage, generateWhatsAppLink } from "@/utils/whatsapp";
import { AtendimentoFormData } from "@/schemas/atendimento";

describe("WhatsApp Message and Link Builder", () => {
  const sampleData: AtendimentoFormData = {
    requestType: "company",
    fullName: "Celso Mucavele",
    companyName: "Indústria Pemba SARL",
    email: "celso@pemba.co.mz",
    phone: "+258849998888",
    service: "automacao-industrial",
    neighborhood: "Cimento",
    referencePoint: "Avenida Eduardo Mondlane",
    locationDescription: "Edifício Industrial, Bloco 4",
    projectDescription: "Instalação de painel SCADA para supervisão de geradores.",
  };

  it("should format WhatsApp message in Portuguese with all required fields", () => {
    const msg = buildWhatsAppMessage(sampleData, "KWL-12345", "pt");
    expect(msg).toContain("Novo pedido de Atendimento — KUWALA TECH");
    expect(msg).toContain("#KWL-12345");
    expect(msg).toContain("Celso Mucavele");
    expect(msg).toContain("Indústria Pemba SARL");
    expect(msg).toContain("Automação Industrial");
    expect(msg).toContain("Cimento");
  });

  it("should generate a valid wa.me URL with clean phone and url-encoded text", () => {
    const url = generateWhatsAppLink(sampleData, "KWL-12345", "258840000000", "pt");
    expect(url.startsWith("https://wa.me/258840000000?text=")).toBe(true);
    expect(url).toContain(encodeURIComponent("Novo pedido de Atendimento — KUWALA TECH"));
  });

  it("should format WhatsApp message with Instrumentação Industrial in both PT and EN", () => {
    const instData: AtendimentoFormData = {
      ...sampleData,
      service: "instrumentacao-industrial",
    };
    const msgPt = buildWhatsAppMessage(instData, "KWL-99999", "pt");
    expect(msgPt).toContain("*Serviço:* Instrumentação Industrial");

    const msgEn = buildWhatsAppMessage(instData, "KWL-99999", "en");
    expect(msgEn).toContain("*Service:* Industrial Instrumentation");
  });
});
