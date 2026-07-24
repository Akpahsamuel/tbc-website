import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";
import { THEME_INIT_SCRIPT } from "@/lib/theme-constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tbcafrica.org"),
  title: {
    default: "TBC Ghana — Building Ghana's Web3 Future Together",
    template: "%s · TBC Ghana",
  },
  description:
    "TBC Ghana (The Builders Circle) is the ecosystem infrastructure uniting education, builders, and community to grow blockchain and Web3 across Ghana and Africa.",
  openGraph: {
    siteName: "TBC Ghana",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          color: "var(--tbc-text)",
        }}
      >
        <Script
          id="tbc-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
