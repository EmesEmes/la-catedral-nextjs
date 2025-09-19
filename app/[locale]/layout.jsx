import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const raleway = Raleway({
  subsets: ["latin"],
  display: 'swap',
  weight: ["400", "700"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-grotesk",
})

const siteUrl = "https://lacatedral.tattoo"; // <-- cambiar por dominio real
const defaultTitle = "La Catedral Tattoo | Estudio de tatuajes en Quito";
const defaultDescription =
  "Estudio de tatuajes en Quito. Artistas especializados, estilos variados y alta higiene. Reserva tu cita en La Catedral Tattoo.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "La Catedral Tattoo",
  title: {
    default: defaultTitle,
    template: "%s | La Catedral Tattoo",
  },
  description: defaultDescription,
  keywords: [
    "tattoo",
    "tattoo adventure",
    "tattoo adventure gear",
    "tattoo gear",
    "quito tattoo",
    "tatuajes quito",
    "estudio de tatuajes",
    "tatuadores en quito",
    "tattoo quito",
    "la catedral tattoo",
  ],
  authors: [{ name: "La Catedral Tattoo" }],
  creator: "La Catedral Tattoo",
  publisher: "La Catedral Tattoo",
  category: "Lifestyle",
  alternates: {
    canonical: "/",
    languages: {
      "es-EC": "/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "La Catedral Tattoo — Estudio de tatuajes en Quito",
    description: defaultDescription,
    siteName: "La Catedral Tattoo",
    locale: "es_EC",
    images: [
      {
        url: "/og/og-default.png", 
        width: 1200,
        height: 630,
        alt: "La Catedral Tattoo - Arte en la piel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Catedral Tattoo — Estudio de tatuajes en Quito",
    description: defaultDescription,
    images: ["/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ], 
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },  
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params
  if(!hasLocale(routing.locales, locale)){
    notFound()
  }
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${grotesk.variable} antialiased bg-black text-white`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
