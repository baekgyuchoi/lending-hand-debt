import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { FloatingNavDemo } from "../components/nav/FloatingNavDemo";
import { FooterLinks } from "../components/nav/FooterLinks";
import { MobileFooter } from "../components/nav/MobileFooter";
import { Analytics } from '@vercel/analytics/react';
import NavBar from "../components/nav/NavBar";
import './globals.css';
import '@mantine/core/styles.css';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lending Hand Debt",
  description: "With the experience and knowledge of the field's elites, we match our clients to trusted debt relief programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <FloatingNavDemo />
          <NavBar />
          {children}
          <div className="hidden md:block">
            <FooterLinks />
          </div>
          <div className="block md:hidden">
            <MobileFooter />
          </div>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
