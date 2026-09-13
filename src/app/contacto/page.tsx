"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/content/brand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCard } from "@/components/ContactCard";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import {
  Mail,
  Instagram,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function ContactoPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* PAGE HERO */}
      <PageHero
        badge={t.contact.badge}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        breadcrumbs={[{ label: t.nav.contact }]}
      />

      {/* CANAIS DE CONTACTO DIRETO (SEM FORMULÁRIO) */}
      <section className="py-16 border-b border-surface-border bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge={t.contact.channelsBadge}
            title={t.contact.channelsTitle}
            subtitle={t.contact.channelsSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Email */}
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title={t.common.email}
              value={BRAND.contact.email}
              description={t.contact.emailDesc}
              href={`mailto:${BRAND.contact.email}`}
              badge={t.common.documentation}
            />

            {/* 2. WhatsApp */}
            <ContactCard
              icon={<Phone className="w-6 h-6 text-[#25D366]" />}
              title={t.common.officialWhatsApp}
              value={`+${BRAND.contact.whatsappNumber}`}
              description={t.contact.whatsappDesc}
              href={`https://wa.me/${BRAND.contact.whatsappNumber.replace(/\D/g, "")}`}
              badge={t.common.quickResponse}
              isExternal={true}
            />

            {/* 3. Instagram */}
            <ContactCard
              icon={<Instagram className="w-6 h-6 text-[#F59E0B]" />}
              title={t.common.instagram}
              value={BRAND.contact.instagram}
              description={t.contact.instagramDesc}
              href={BRAND.contact.instagramUrl}
              badge={t.common.newsUpdates}
              isExternal={true}
            />

            {/* 4. Localização (Google Maps) */}
            <ContactCard
              icon={<MapPin className="w-6 h-6 text-[#00D2FF]" />}
              title={t.common.locationTitle}
              value={BRAND.location.fullText}
              description={t.contact.locationDesc}
              href={BRAND.location.googleMapsUrl}
              badge={t.common.locationBadge}
              isExternal={true}
            />
          </div>

          {/* Banner Directing to Atendimento Form */}
          <div className="tech-card p-8 rounded-lg bg-surface-card border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TechnicalBadge variant="amber">{t.contact.engineeringFormBadge}</TechnicalBadge>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.contact.bannerTitle}
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {t.contact.ctaFormNotice}
              </p>
            </div>

            <Link
              href="/atendimento"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono font-bold rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-all flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.contact.accessServiceDeskButton}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
