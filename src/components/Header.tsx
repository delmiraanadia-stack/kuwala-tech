"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { cn } from "@/utils/cn";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/empresa", label: t.nav.company },
    { href: "/servicos", label: t.nav.services },
    { href: "/solucoes", label: t.nav.solutions },
    { href: "/metodo", label: t.nav.method },
    { href: "/sobre-nos", label: t.nav.aboutUs },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-md border-surface-border shadow-lg"
          : "bg-primary-dark/80 backdrop-blur-sm border-surface-border/50"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo variant="full" />

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label={t.common.menu}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded transition-all duration-150 relative",
                  isActive
                    ? "text-[#00D2FF] font-semibold bg-[#00D2FF]/10 border border-[#00D2FF]/20"
                    : "text-slate-300 hover:text-white hover:bg-surface-light/40"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Language Switcher + Atendimento CTA) */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/atendimento"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-semibold rounded transition-all duration-200",
              "bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703] shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]",
              pathname === "/atendimento" && "ring-2 ring-white"
            )}
          >
            <PhoneCall className="w-4 h-4" aria-hidden="true" />
            {t.common.requestService}
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-surface-border text-slate-300 hover:text-white hover:bg-surface-light"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={t.common.toggleMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-surface-border bg-primary-dark/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
        >
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded flex items-center justify-between",
                    isActive
                      ? "text-[#00D2FF] bg-[#00D2FF]/10 font-bold border border-[#00D2FF]/30"
                      : "text-slate-300 hover:bg-surface-light hover:text-white"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/atendimento"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-bold rounded bg-[#F59E0B] text-[#060A17] hover:bg-[#FFB703]"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              {t.common.requestService}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
