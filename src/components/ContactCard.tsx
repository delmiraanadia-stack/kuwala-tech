import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  href?: string;
  badge?: string;
  isExternal?: boolean;
  className?: string;
}

export function ContactCard({
  icon,
  title,
  value,
  description,
  href,
  badge,
  isExternal = false,
  className,
}: ContactCardProps) {
  const CardContent = (
    <div
      className={cn(
        "tech-card group p-6 rounded-lg border border-surface-border bg-surface-card hover:border-[#00D2FF]/50 transition-all duration-200 flex flex-col justify-between h-full",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded bg-primary-dark border border-surface-border text-[#00D2FF] group-hover:text-white group-hover:bg-[#00D2FF]/20 group-hover:border-[#00D2FF]/40 transition-colors">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-surface-light text-slate-300 border border-surface-border">
              {badge}
            </span>
          )}
        </div>

        <div className="space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            {title}
          </span>
          <h3 className="text-base font-bold text-white group-hover:text-[#00D2FF] transition-colors break-words">
            {value}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {href && (
        <div className="pt-4 mt-4 border-t border-surface-border/50 flex items-center gap-1 text-xs font-mono font-semibold text-[#00D2FF] group-hover:text-white transition-colors">
          <span>Aceder</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
