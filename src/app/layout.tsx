import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Hebrew, Sigmar } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  variable: "--font-hebrew",
  display: "swap",
});

const sigmar = Sigmar({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-latin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.misisimi.com"),
  title: "misisimi — AI execution that goes live",
  description: "Production-ready AI systems in weeks. No pilots. No hourly billing. Start with a diagnostic.",
  openGraph: {
    title: "misisimi — AI execution that goes live",
    description: "Production-ready AI systems in weeks. No pilots. No hourly billing. Start with a diagnostic.",
    url: "https://www.misisimi.com",
    siteName: "misisimi",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 768,
        height: 768,
        alt: "MISISIMI site illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "misisimi — AI execution that goes live",
    description: "Production-ready AI systems in weeks. No pilots. No hourly billing. Start with a diagnostic.",
    images: ["/hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSansHebrew.variable} ${sigmar.variable}`}>
      <body>{children}</body>
    </html>
  );
}
