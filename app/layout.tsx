import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileNav } from "./components/mobile-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhen Collection Paris",
  description: "A platform connecting French and Chinese artists through dialogue, exhibitions and collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16">
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
