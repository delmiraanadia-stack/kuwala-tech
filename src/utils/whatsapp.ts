import { AtendimentoFormData } from "@/schemas/atendimento";
import { SERVICES } from "@/content/services";

export function formatServiceName(serviceSlug: string, lang: "pt" | "en" = "pt"): string {
  const s = SERVICES.find((item) => item.slug === serviceSlug);
  return s ? s.title[lang] : serviceSlug;
}

export function buildWhatsAppMessage(
  data: AtendimentoFormData,
  requestId: string,
  lang: "pt" | "en" = "pt"
): string {
  const serviceName = formatServiceName(data.service, lang);
  const tipo = data.requestType === "company" 
    ? (lang === "pt" ? "Empresa" : "Company") 
    : (lang === "pt" ? "Pessoal" : "Personal");
  const company = data.companyName && data.companyName.trim() ? data.companyName.trim() : "N/A";

  if (lang === "en") {
    return [
      `*New Service Request — KUWALA TECH*`,
      `*ID Reference:* #${requestId}`,
      ``,
      `*Type:* ${tipo}`,
      `*Name:* ${data.fullName}`,
      `*Company:* ${company}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone}`,
      `*Service:* ${serviceName}`,
      `*Neighborhood:* ${data.neighborhood}`,
      `*Reference Point:* ${data.referencePoint}`,
      `*Location Details:* ${data.locationDescription}`,
      ``,
      `*Project Description:*`,
      `${data.projectDescription}`,
      ``,
      `_Sent via kuwalatech.co.mz institutional portal_`,
    ].join("\n");
  }

  return [
    `*Novo pedido de Atendimento — KUWALA TECH*`,
    `*Identificador:* #${requestId}`,
    ``,
    `*Tipo:* ${tipo}`,
    `*Nome:* ${data.fullName}`,
    `*Empresa:* ${company}`,
    `*Email:* ${data.email}`,
    `*Telefone:* ${data.phone}`,
    `*Serviço:* ${serviceName}`,
    `*Bairro:* ${data.neighborhood}`,
    `*Zona/Ponto de referência:* ${data.referencePoint}`,
    `*Localização:* ${data.locationDescription}`,
    ``,
    `*Descrição do projecto:*`,
    `${data.projectDescription}`,
    ``,
    `_Enviado através do portal institucional KUWALA TECH_`,
  ].join("\n");
}

export function generateWhatsAppLink(
  data: AtendimentoFormData,
  requestId: string,
  phoneNumber: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "258840000000",
  lang: "pt" | "en" = "pt"
): string {
  // Clean phone number: remove any non-digit characters
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const message = buildWhatsAppMessage(data, requestId, lang);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
