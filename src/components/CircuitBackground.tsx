import React from "react";
import { cn } from "@/utils/cn";

interface CircuitBackgroundProps {
  className?: string;
  variant?: "dense" | "light" | "lines";
}

export function CircuitBackground({ className, variant = "light" }: CircuitBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none -z-10",
        className
      )}
      aria-hidden="true"
    >
      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "dense" ? "tech-grid-dense opacity-60" : "tech-grid opacity-40"
        )}
      />

      {/* SVG Circuit Lines & Nodes */}
      <svg
        className="absolute w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-trace-pattern"
            x="0"
            y="0"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 40 L 80 40 L 120 80 L 200 80 M 120 80 L 120 160 L 160 200 M 40 180 L 100 180 L 120 160"
              fill="none"
              stroke="#00D2FF"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
            <circle cx="20" cy="40" r="3" fill="#00D2FF" />
            <circle cx="200" cy="80" r="3" fill="#F59E0B" />
            <circle cx="160" cy="200" r="3" fill="#00D2FF" />
            <circle cx="40" cy="180" r="2.5" fill="#F59E0B" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-trace-pattern)" />
      </svg>

      {/* Top subtle blue ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00D2FF]/5 blur-[120px] rounded-full" />
    </div>
  );
}
