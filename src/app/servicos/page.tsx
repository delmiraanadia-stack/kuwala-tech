"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES } from "@/content/services";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { CheckCircle2, SlidersHorizontal, Cpu, Zap, Shield, Wrench } from "lucide-react";

export default function ServicosPage() {
  const { language, t } = useLanguage();
  const [activeTag, setActiveTag] = useState<string>("all");

  const SERVICE_FILTERS = [
    { id: "all", label: { pt: "Todos os Serviços", en: "All Services" } },
    { id: "plc", label: { pt: "PLC", en: "PLC" }, match: "plc" },
    { id: "sensors", label: { pt: "Sensores", en: "Sensors" }, match: "senso" },
    { id: "solar", label: { pt: "Solar", en: "Solar" }, match: "solar" },
    { id: "electrical", label: { pt: "Eléctricas", en: "Electrical" }, match: "eléctri" },
    { id: "networks", label: { pt: "Redes", en: "Networks" }, match: "rede" },
    { id: "cctv", label: { pt: "CCTV", en: "CCTV" }, match: "cctv" },
    { id: "websites", label: { pt: "Websites", en: "Websites" }, match: "web" },
    { id: "maintenance", label: { pt: "Manutenção", en: "Maintenance" }, match: "manuten" },
  ];

  const activeFilter = SERVICE_FILTERS.find((f) => f.id === activeTag);

  const filteredServices = SERVICES.filter((service) => {
    if (activeTag === "all") return true;
    const match = (activeFilter && "match" in activeFilter ? activeFilter.match : "") ?? "";
    return (
      service.tags.pt.some((tag) => tag.toLowerCase().includes(match.toLowerCase())) ||
      service.tags.en.some((tag) => tag.toLowerCase().includes(match.toLowerCase())) ||
      service.title[language].toLowerCase().includes(match.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.services.badge}
        title={t.services.title}
        subtitle={t.services.subtitle}
        breadcrumbs={[{ label: t.nav.services }]}
      />

      {/* INTRODUÇÃO & FILTRO */}
      <section className="py-12 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {t.services.filterTitle}
              </h2>
              <p className="text-xs text-slate-400">
                {t.services.filterSubtitle}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5" role="toolbar" aria-label={t.services.filterTitle}>
              {SERVICE_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveTag(filter.id)}
                  aria-pressed={activeTag === filter.id}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    activeTag === filter.id
                      ? "bg-[#00D2FF] text-[#060A17] font-bold shadow-[0_0_10px_rgba(0,210,255,0.3)]"
                      : "bg-surface-card border border-surface-border text-slate-300 hover:text-white hover:bg-surface-light"
                  }`}
                >
                  {filter.label[language]}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DOS 8 SERVIÇOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* COMO TRABALHAMOS / RIGOR DE EXECUÇÃO */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.services.standardsBadge}
            title={t.services.standardsTitle}
            subtitle={t.services.standardsSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
              <div className="p-2.5 rounded bg-primary-dark text-[#00D2FF] w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{t.services.standard1Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.services.standard1Desc}
              </p>
            </div>

            <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
              <div className="p-2.5 rounded bg-primary-dark text-[#F59E0B] w-fit">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{t.services.standard2Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.services.standard2Desc}
              </p>
            </div>

            <div className="tech-card p-6 rounded-lg bg-surface-card border border-surface-border space-y-3">
              <div className="p-2.5 rounded bg-primary-dark text-[#00D2FF] w-fit">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{t.services.standard3Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.services.standard3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t.services.ctaTitle}
        subtitle={t.services.ctaSubtitle}
        buttonText={t.common.requestService}
        secondaryText={t.nav.solutions}
        secondaryHref="/solucoes"
      />
    </div>
  );
}
