import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chai Spa | Spa & Wellness Reservations",
    template: "%s | Chai Spa",
  },

  description:
    "Chai Spa is a spa and wellness reservation platform in the Philippines, offering convenient online booking for relaxing massages, body treatments, facial services, and other wellness experiences.",

  keywords: [
    "Chai Spa",
    "spa Philippines",
    "spa booking Philippines",
    "spa reservation",
    "massage booking",
    "massage Philippines",
    "wellness spa",
    "wellness Philippines",
    "facial treatment",
    "body massage",
    "spa management system",
    "online spa booking",
    "relaxation massage",
    "spa appointment",
  ],

  authors: [
    {
      name: "Chai Spa",
    },
  ],

  creator: "Chai Spa",
  publisher: "Chai Spa",

  applicationName: "Chai Spa",

  category: "Health & Wellness",

  metadataBase: new URL("https://chaispa.ph"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: "Chai Spa",
    title: "Chai Spa | Relax, Renew & Reconnect",
    description:
      "Book relaxing spa and wellness treatments with Chai Spa. Discover massage, facial, body, and wellness services designed to help you relax, renew, and reconnect.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chai Spa - Spa & Wellness Reservations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chai Spa | Relax, Renew & Reconnect",
    description:
      "Conveniently book spa, massage, facial, body, and wellness treatments with Chai Spa in the Philippines.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/main/logo-icon.png",
      },
      {
        url: "/main/logo-icon.png",
        type: "image/png",
      },
    ],
    apple: "/main/logo-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-PH"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">
        {/* <SmoothScrollProvider></SmoothScrollProvider> */}
        {children}
      </body>
    </html>
  );
}
