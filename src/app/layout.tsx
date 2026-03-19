import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "misisimi — Zero2Done Execution",
  description: "misisimi is a client-first execution partner for SMEs. We embed AI into daily operations to increase efficiency and profitability.",
  viewport: "width=device-width, initial-scale=1",
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
