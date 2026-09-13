"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CircuitBackground } from "@/components/CircuitBackground";
import { TechnicalBadge } from "@/components/TechnicalBadge";
import { ArrowLeft, Home, Cpu, Wrench } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center py-20 px-4">
      <CircuitBackground variant="dense" />

      <div className="tech-card max-w-lg w-full p-8 sm:p-12 rounded-xl bg-surface-card border-2 border-[#00D2FF]/40 text-center space-y-6 shadow-2xl relative z-10">
        <div className="flex justify-center">
          <TechnicalBadge variant="amber" dot={true}>
            CÓDIGO DE FALHA TÉCNICA: 404
          </TechnicalBadge>
        </div>

        <div className="space-y-2">
          <span className="text-6xl sm:text-7xl font-mono font-bold text-[#00D2FF] tracking-tighter block">
            404
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {t.notFound.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.notFound.description}
          </p>
        </div>

        <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-mono font-bold bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>{t.notFound.backHome}</span>
          </Link>

          <Link
            href="/servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-mono font-medium border border-surface-border text-slate-200 hover:bg-surface-light hover:text-white transition-colors"
          >
            <Cpu className="w-4 h-4" />
            <span>{t.notFound.viewServices}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
