"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BRAND } from "@/content/brand";
import { SERVICES } from "@/content/services";
import { SOLUTIONS } from "@/content/solutions";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Instagram, Phone, ArrowUpRight, Shield } from "lucide-react";

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-dark border-t border-surface-border text-slate-400 mt-auto" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" />
            <div className="pt-2 space-y-2 text-xs font-mono text-slate-300">
              <a
                href={BRAND.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>{BRAND.location.fullText}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00D2FF] flex-shrink-0" />
                <span>{BRAND.contact.email}</span>
              </a>
              <a
                href={`https://wa.me/${BRAND.contact.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>+{BRAND.contact.whatsappNumber}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>{BRAND.contact.instagram}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços Técnicos */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              {t.nav.services}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="hover:text-[#00D2FF] transition-colors line-clamp-1"
                  >
                    {service.title[language]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicos"
                  className="text-[#00D2FF] hover:underline font-mono text-[11px] inline-flex items-center gap-1 mt-1"
                >
                  {t.common.viewServices} ({SERVICES.length}) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              {t.nav.solutions}
            </h4>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={`/solucoes/${solution.slug}`}
                    className="hover:text-[#00D2FF] transition-colors line-clamp-1"
                  >
                    {solution.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Institucional & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              {t.nav.company}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/empresa" className="hover:text-[#00D2FF] transition-colors">
                  {t.nav.company}
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="hover:text-[#00D2FF] transition-colors">
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/metodo" className="hover:text-[#00D2FF] transition-colors">
                  {t.nav.method}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#00D2FF] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/atendimento"
                  className="text-[#F59E0B] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {t.nav.atendimento} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono">
            © {currentYear} {BRAND.legalName}. {t.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-[#00D2FF]" />
              ISO / IEC Standards
            </span>
            <span>·</span>
            <span>{t.common.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
