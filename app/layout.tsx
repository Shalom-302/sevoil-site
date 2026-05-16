import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sev-oil.com"),
  title: {
    default: "SEV-OIL Maritime & Logistique — Petroleum for land, mining & marine",
    template: "%s · SEV-OIL",
  },
  description:
    "SEV-OIL supplies petroleum products to service stations, mining sites and vessels across Côte d'Ivoire — one accountable team, 24/7 operations.",
  keywords: [
    "SEV-OIL",
    "petroleum supply",
    "marine bunkering",
    "Abidjan port",
    "mining fuel",
    "service station supply",
    "VLSFO",
    "MGO",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "SEV-OIL Maritime & Logistique" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_SA", "zh_CN"],
    url: "https://sev-oil.com",
    siteName: "SEV-OIL",
    title: "SEV-OIL — Petroleum supply for land, mining & marine",
    description:
      "Local team, national reach. Service stations, mining sites and vessel bunkering across Côte d'Ivoire.",
    images: [
      {
        url: "/cta.jpg",
        width: 1200,
        height: 630,
        alt: "SEV-OIL — petroleum supply across land, mining and marine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEV-OIL — Petroleum supply for land, mining & marine",
    description: "Service stations, mining sites and vessel bunkering across Côte d'Ivoire.",
    images: ["/cta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/logosev.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <FloatingActions />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SEV-OIL Maritime & Logistique",
              description:
                "Petroleum supply across land, mining and marine sectors in Côte d'Ivoire.",
              telephone: "+225 05 02 71 76 76",
              email: "sevemaritime@sev-oil.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Abidjan Port",
                addressLocality: "Abidjan",
                addressCountry: "CI",
              },
              areaServed: "Côte d'Ivoire",
              openingHours: "Mo-Su 00:00-24:00",
            }),
          }}
        />
      </body>
    </html>
  );
}
