import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { BRAND } from "@/content/brand";

export const viewport: Viewport = {
  themeColor: "#060A17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "KUWALA TECH | Automação, Energia e Tecnologia em Pemba",
    template: "%s | KUWALA TECH",
  },
  description:
    "Empresa de engenharia e tecnologia em Pemba, Moçambique. Especialistas em Automação Industrial, Automação Residencial, Energia Solar, Instalações Eléctricas, Redes e Segurança Electrónica.",
  keywords: [
    "KUWALA TECH",
    "Automação Pemba",
    "Energia Solar Cabo Delgado",
    "Engenharia Moçambique",
    "Instalações Elétricas Pemba",
    "Automação Industrial PLC SCADA",
    "Segurança Eletrónica CCTV",
    "Redes Informáticas Pemba",
  ],
  authors: [{ name: "KUWALA TECH", url: "https://kuwalatech.co.mz" }],
  creator: "KUWALA TECH",
  publisher: "KUWALA TECH",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://kuwalatech.co.mz"),
  openGraph: {
    title: "KUWALA TECH | Automação, Energia e Tecnologia em Pemba",
    description: "Iluminando Soluções Inteligentes em Pemba e Cabo Delgado.",
    url: "https://kuwalatech.co.mz",
    siteName: "KUWALA TECH",
    locale: "pt_MZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-primary-dark text-slate-100 flex flex-col min-h-screen">
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
