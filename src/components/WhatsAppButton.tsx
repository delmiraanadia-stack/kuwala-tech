"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { BRAND } from "@/content/brand";
import { cn } from "@/utils/cn";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  message?: string;
  phoneNumber?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function WhatsAppButton({
  children,
  message = "Olá KUWALA TECH, gostaria de obter informações sobre os vossos serviços de engenharia.",
  phoneNumber = BRAND.contact.whatsappNumber,
  className,
  variant = "primary",
}: WhatsAppButtonProps) {
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  const href = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  const variantStyles = {
    primary:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]",
    secondary: "bg-surface-card border border-surface-border text-slate-200 hover:bg-surface-light",
    outline: "border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-mono font-semibold transition-all duration-200",
        variantStyles[variant],
        "focus-visible:ring-2 focus-visible:ring-[#25D366]",
        className
      )}
      aria-label="Contactar via WhatsApp oficial"
    >
      <MessageSquare className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>{children || "Falar no WhatsApp"}</span>
    </a>
  );
}
