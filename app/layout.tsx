import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/pulse/navbar";
import { Footer } from "@/components/pulse/footer";

export const metadata: Metadata = {
  title: "Pulsefit — Strength, Conditioning & Boxing Gym",
  description: "Coached strength, cycling, boxing and mobility classes in a no-excuses training floor. Book your free trial session on WhatsApp.",
  openGraph: {
    title: "Pulsefit — Strength, Conditioning & Boxing Gym",
    description: "Coached strength, cycling, boxing and mobility classes in a no-excuses training floor. Book your free trial session on WhatsApp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
