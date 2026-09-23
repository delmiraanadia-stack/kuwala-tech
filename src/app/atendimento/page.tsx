"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  SERVICE_KEYS,
  PEMBA_NEIGHBORHOODS,
  atendimentoSchema,
  AtendimentoFormData,
  RequestKind,
} from "@/schemas/atendimento";
import { SERVICES } from "@/content/services";
import { BRAND } from "@/content/brand";
import { generateWhatsAppLink, formatServiceName } from "@/utils/whatsapp";
import { resolveValidationError } from "@/utils/validation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FormField } from "@/components/FormField";
import { SelectField } from "@/components/SelectField";
import { TextareaField } from "@/components/TextareaField";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import {
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building,
  User,
  ShieldCheck,
  RotateCcw,
  ExternalLink,
  MapPin,
} from "lucide-react";

type FormState = "idle" | "editing" | "submitting" | "validation-error" | "server-error" | "success";

export default function AtendimentoPage() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<AtendimentoFormData>({
    requestType: "personal",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "automacao-industrial",
    neighborhood: "Cimento",
    referencePoint: "",
    locationDescription: "",
    projectDescription: "",
  });

  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");
  const [serverErrorCode, setServerErrorCode] = useState<string>("");
  const [createdRequestId, setCreatedRequestId] = useState<string>("");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  // Helper para resolver a mensagem de erro do campo no idioma ativo (PT / EN)
  const getFieldError = (fieldName: string): string | undefined => {
    const errorKeyOrMessage = fieldErrors[fieldName];
    if (!errorKeyOrMessage) return undefined;
    return resolveValidationError(errorKeyOrMessage, t);
  };

  // Helper para resolver o erro do servidor no idioma ativo
  const getServerError = (): string => {
    if (serverErrorCode) {
      return resolveValidationError(serverErrorCode, t);
    }
    return serverErrorMessage || t.atendimento.errors.general;
  };

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formState === "validation-error" || formState === "server-error") {
      setFormState("editing");
    }

    // Clear specific field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Handle Request Type Toggle
  const handleTypeToggle = (type: RequestKind) => {
    setFormData((prev) => ({
      ...prev,
      requestType: type,
      companyName: type === "personal" ? "" : prev.companyName,
    }));
    if (fieldErrors["companyName"]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy["companyName"];
        return copy;
      });
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setFieldErrors({});
    setServerErrorMessage("");
    setServerErrorCode("");

    // 1. Client-side Zod Validation
    const validation = atendimentoSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        const path = err.path.join(".");
        if (!errors[path]) {
          errors[path] = err.message;
        }
      });
      setFieldErrors(errors);
      setFormState("validation-error");
      return;
    }

    // 2. Server-side API submission & database persistence
    try {
      const res = await fetch("/api/atendimento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        if (json.error?.fields) {
          setFieldErrors(json.error.fields);
          setFormState("validation-error");
        } else {
          const errCode = json.error?.code;
          if (errCode === "RATE_LIMIT_EXCEEDED") {
            setServerErrorCode("rateLimit");
          } else if (errCode === "SERVER_ERROR") {
            setServerErrorCode("serverError");
          } else {
            setServerErrorCode(json.error?.message ? "" : "general");
          }
          setServerErrorMessage(json.error?.message || "");
          setFormState("server-error");
        }
        return;
      }

      // 3. Success -> store requestId and generate WhatsApp redirect URL
      const reqId = json.requestId;
      setCreatedRequestId(reqId);

      const link = generateWhatsAppLink(
        validation.data,
        reqId,
        BRAND.contact.whatsappNumber,
        language
      );
      setWhatsappUrl(link);
      setFormState("success");
    } catch (err) {
      console.error("Submission failed:", err);
      setServerErrorCode("general");
      setServerErrorMessage(t.atendimento.errors.general);
      setFormState("server-error");
    }
  };

  const handleResetForm = () => {
    setFormData({
      requestType: "personal",
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "automacao-industrial",
      neighborhood: "Cimento",
      referencePoint: "",
      locationDescription: "",
      projectDescription: "",
    });
    setFormState("idle");
    setFieldErrors({});
    setServerErrorMessage("");
    setServerErrorCode("");
    setCreatedRequestId("");
    setWhatsappUrl("");
  };

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.atendimento.badge}
        badgeVariant="amber"
        title={t.atendimento.title}
        subtitle={t.atendimento.subtitle}
        breadcrumbs={[{ label: t.nav.atendimento }]}
      />

      {/* FORM SECTION */}
      <section className="py-16 border-b border-surface-border bg-primary-dark relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {formState === "success" ? (
            /* SUCCESS CONFIRMATION & WHATSAPP FORWARDING MODAL / CARD */
            <div className="tech-card p-8 sm:p-12 rounded-xl bg-surface-card border-2 border-[#00D2FF] shadow-[0_0_40px_rgba(0,210,255,0.2)] space-y-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-4 border-b border-surface-border pb-6">
                <div className="p-3 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase text-[#00D2FF] tracking-wider">
                    {t.atendimento.successModal.idLabel}: #{createdRequestId}
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    {t.atendimento.successModal.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary-dark border border-surface-border space-y-2 text-xs font-mono text-slate-300">
                <p className="text-slate-200">{t.atendimento.successModal.message}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-slate-400">
                  <div>
                    <span className="text-slate-500">{t.atendimento.successModal.applicantLabel}:</span>{" "}
                    <strong className="text-white">{formData.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">{t.atendimento.successModal.serviceLabel}:</span>{" "}
                    <strong className="text-[#00D2FF]">
                      {formatServiceName(formData.service, language)}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500">{t.atendimento.successModal.locationLabel}:</span>{" "}
                    <strong className="text-white">
                      {formData.neighborhood}, Pemba
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500">{t.atendimento.successModal.phoneLabel}:</span>{" "}
                    <strong className="text-[#F59E0B]">{formData.phone}</strong>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-[#25D366]/15 via-surface-card to-[#25D366]/15 border border-[#25D366]/40 space-y-4">
                <div className="flex items-center gap-2 text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                    {t.atendimento.successModal.whatsappForwardingTitle}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.atendimento.successModal.whatsappInstruction}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-base font-mono font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.atendimento.successModal.actionButton}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.atendimento.successModal.resetButton}</span>
                </button>
              </div>
            </div>
          ) : (
            /* ATENDIMENTO FORM */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="tech-card p-6 sm:p-10 rounded-xl bg-surface-card border border-surface-border shadow-2xl space-y-8"
            >
              {/* Server Error Alert */}
              {formState === "server-error" && (
                <div
                  role="alert"
                  className="p-4 rounded-lg bg-red-950/60 border border-red-500/60 text-red-300 text-xs font-mono flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{getServerError()}</span>
                </div>
              )}

              {/* 1. Tipo de Pedido (Pessoal / Empresa) com Toggle Dinâmico */}
              <div className="space-y-3 pb-6 border-b border-surface-border">
                <label className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wide flex items-center gap-1">
                  {t.atendimento.form.typeLabel}
                  <span className="text-[#F59E0B] font-bold">*</span>
                </label>

                <div className="grid grid-cols-2 gap-4" role="radiogroup">
                  <button
                    type="button"
                    onClick={() => handleTypeToggle("personal")}
                    role="radio"
                    aria-checked={formData.requestType === "personal"}
                    className={`flex items-center justify-center gap-2.5 p-3.5 rounded-lg border text-sm font-mono transition-all ${
                      formData.requestType === "personal"
                        ? "bg-[#00D2FF]/20 border-[#00D2FF] text-[#00D2FF] font-bold ring-1 ring-[#00D2FF]/40"
                        : "bg-primary-dark/80 border-surface-border text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>{t.atendimento.form.typePersonal}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTypeToggle("company")}
                    role="radio"
                    aria-checked={formData.requestType === "company"}
                    className={`flex items-center justify-center gap-2.5 p-3.5 rounded-lg border text-sm font-mono transition-all ${
                      formData.requestType === "company"
                        ? "bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B] font-bold ring-1 ring-[#F59E0B]/40"
                        : "bg-primary-dark/80 border-surface-border text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Building className="w-4 h-4" />
                    <span>{t.atendimento.form.typeCompany}</span>
                  </button>
                </div>
              </div>

              {/* 2. Dados de Contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  name="fullName"
                  label={t.atendimento.form.fullNameLabel}
                  placeholder={t.atendimento.form.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={getFieldError("fullName")}
                  required
                />

                {formData.requestType === "company" ? (
                  <FormField
                    name="companyName"
                    label={t.atendimento.form.companyNameLabel}
                    placeholder={t.atendimento.form.companyNamePlaceholder}
                    value={formData.companyName || ""}
                    onChange={handleInputChange}
                    error={getFieldError("companyName")}
                    hint={t.atendimento.form.companyRequiredHint}
                    required
                  />
                ) : (
                  <FormField
                    name="phone"
                    label={t.atendimento.form.phoneLabel}
                    placeholder={t.atendimento.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={getFieldError("phone")}
                    required
                  />
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  name="email"
                  type="email"
                  label={t.atendimento.form.emailLabel}
                  placeholder={t.atendimento.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  error={getFieldError("email")}
                  required
                />

                {formData.requestType === "company" && (
                  <FormField
                    name="phone"
                    label={t.atendimento.form.phoneLabel}
                    placeholder={t.atendimento.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={getFieldError("phone")}
                    required
                  />
                )}
              </div>

              {/* 3. Serviço Pretendido */}
              <div className="pt-2">
                <SelectField
                  name="service"
                  label={t.atendimento.form.serviceLabel}
                  value={formData.service}
                  onChange={handleInputChange}
                  error={getFieldError("service")}
                  options={SERVICES.map((s) => ({
                    value: s.slug,
                    label: `${s.number}. ${s.title[language]}`,
                  }))}
                  required
                />
              </div>

              {/* 4. Localização Exata em Pemba */}
              <div className="pt-4 border-t border-surface-border space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    {t.atendimento.form.locationSectionTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <SelectField
                    name="neighborhood"
                    label={t.atendimento.form.neighborhoodLabel}
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    error={getFieldError("neighborhood")}
                    options={PEMBA_NEIGHBORHOODS.map((b) => ({
                      value: b,
                      label: b,
                    }))}
                    required
                  />

                  <FormField
                    name="referencePoint"
                    label={t.atendimento.form.referencePointLabel}
                    placeholder={t.atendimento.form.referencePointPlaceholder}
                    value={formData.referencePoint}
                    onChange={handleInputChange}
                    error={getFieldError("referencePoint")}
                    required
                  />
                </div>

                <FormField
                  name="locationDescription"
                  label={t.atendimento.form.locationDescriptionLabel}
                  placeholder={t.atendimento.form.locationDescriptionPlaceholder}
                  value={formData.locationDescription}
                  onChange={handleInputChange}
                  error={getFieldError("locationDescription")}
                  required
                />
              </div>

              {/* 5. Descrição do Projecto */}
              <div className="pt-4 border-t border-surface-border">
                <TextareaField
                  name="projectDescription"
                  label={t.atendimento.form.projectDescriptionLabel}
                  placeholder={t.atendimento.form.projectDescriptionPlaceholder}
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  error={getFieldError("projectDescription")}
                  rows={5}
                  required
                />
              </div>

              {/* Submission Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-mono font-bold bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] focus-visible:ring-2 focus-visible:ring-white"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.atendimento.form.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-5 h-5" />
                      <span>{t.atendimento.form.submitButton}</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] font-mono text-center text-slate-500 mt-2">
                  * {t.atendimento.form.dataPrivacyNotice}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
