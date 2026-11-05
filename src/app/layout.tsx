import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion";
import { SITE_URL } from "@/lib/site";

// Dynamically load client-side assistant to preserve lean initial bundle
const ShivSastraAssistant = dynamic(() =>
  import("@/components/ai/ShivSastraAssistant").then(
    (mod) => mod.ShivSastraAssistant
  )
);

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | JIOSI",
    default: "JIOSI — Intelligent Software Systems & AI Innovation",
  },
  description:
    "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
  keywords: [
    "JIOSI",
    "JIOSI Inbox",
    "Agentic AI",
    "Email Productivity",
    "Software Architecture",
    "Workflow Automation",
    "Next.js",
    "Spring Boot",
  ],
  authors: [{ name: "JIOSI" }],
  creator: "JIOSI",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "JIOSI",
    title: "JIOSI — Intelligent Software Systems & AI Innovation",
    description:
      "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JIOSI — Intelligent Software Systems & AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JIOSI — Intelligent Software Systems & AI Innovation",
    description:
      "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-canvas-primary)] text-[var(--color-ink-primary)] font-body">
        {/* Accessible Keyboard Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1A1D20] focus:text-[#F5F2ED] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:border focus:border-[#C09F80] focus:outline-none focus:shadow-md"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
          <ShivSastraAssistant />
        </MotionProvider>
      </body>
    </html>
  );
}
