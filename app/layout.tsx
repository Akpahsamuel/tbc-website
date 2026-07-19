import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
    <html lang="en" className={inter.variable}>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          color: "#14211F",
        }}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
