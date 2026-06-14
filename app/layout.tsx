import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itechqu.com"),
  title: {
    default: "iTechQu — Information Technology With Quality",
    template: "%s | iTechQu",
  },
  description:
    "iTechQu delivers enterprise-grade software, ERP systems, GIS solutions, government digital platforms, and AI-driven products that transform businesses and public services.",
  keywords: [
    "software company Raipur",
    "software company Chhattisgarh",
    "enterprise software development India",
    "government software solutions",
    "ERP development",
    "GIS solutions",
    "RTO management system",
    "custom software development",
    "iTechQu",
  ],
  authors: [{ name: "iTechQu Team" }],
  creator: "iTechQu",
  publisher: "Information Technology With Quality",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.itechqu.com",
    siteName: "iTechQu",
    title: "iTechQu — Information Technology With Quality",
    description:
      "Enterprise software solutions for government, transport, education, and enterprise. Trusted by departments across India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "iTechQu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iTechQu — Information Technology With Quality",
    description:
      "Enterprise software solutions for government, transport, education, and enterprise.",
    images: ["/og-image.png"],
    creator: "@itechqu",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
