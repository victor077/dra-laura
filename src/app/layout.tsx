import type { Metadata } from "next";
import { Instrument_Serif, Jost } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dra. Laura Helena | Cirurgiã-dentista",
    template: "%s | Dra. Laura Helena",
  },
  description: "Dra. Laura Helena, cirurgiã-dentista em Ferraz de Vasconcelos - SP. Clareamento, facetas em resina, restaurações, odontopediatria e cirurgia. Agende sua avaliação pelo WhatsApp.",
  openGraph: {
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${instrument.variable} h-full font-sans antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
