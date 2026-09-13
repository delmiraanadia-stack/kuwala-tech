"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center space-x-2 text-xs font-mono text-slate-400 py-3 overflow-x-auto",
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-[#00D2FF] transition-colors flex-shrink-0"
      >
        <Home className="w-3.5 h-3.5" aria-hidden="true" />
        <span>{t.nav.home}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" aria-hidden="true" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#00D2FF] transition-colors flex-shrink-0 truncate max-w-[200px]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-slate-200 font-semibold flex-shrink-0 truncate max-w-[250px]"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
