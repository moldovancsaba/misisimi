import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.misisimi.com"),
  title: "misisimi — Zero2Done Execution",
  description: "misisimi is a client-first execution partner for SMEs. We embed AI into daily operations to increase efficiency and profitability.",
  openGraph: {
    title: "misisimi — Zero2Done Execution",
    description: "misisimi is a client-first execution partner for SMEs. We embed AI into daily operations to increase efficiency and profitability.",
    url: "https://www.misisimi.com",
    siteName: "misisimi",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 768,
        height: 768,
        alt: "misisimi hero artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "misisimi — Zero2Done Execution",
    description: "misisimi is a client-first execution partner for SMEs. We embed AI into daily operations to increase efficiency and profitability.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
