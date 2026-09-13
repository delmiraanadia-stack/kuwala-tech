import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #0A1128)",
          dark: "var(--color-primary-dark, #060A17)",
          card: "var(--color-primary-card, #111C44)",
          hover: "var(--color-primary-hover, #18275C)",
        },
        system: {
          DEFAULT: "var(--color-system, #00D2FF)",
          glow: "var(--color-system-glow, rgba(0, 210, 255, 0.15))",
          dark: "#0284C7",
        },
        energy: {
          DEFAULT: "var(--color-energy, #F59E0B)",
          bright: "var(--color-energy-bright, #FFB703)",
          hover: "#D97706",
        },
        surface: {
          DEFAULT: "var(--color-surface, #0F172A)",
          light: "#1E293B",
          card: "#162038",
          border: "#1E2C4F",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(0, 210, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 210, 255, 0.05) 1px, transparent 1px)",
        "circuit-radial": "radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
