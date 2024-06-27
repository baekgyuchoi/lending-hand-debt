import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import { FloatingNavDemo } from "@/components/nav/FloatingNavDemo";
import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { FooterLinks } from "@/components/nav/FooterLinks";
import { MobileFooter } from "@/components/nav/MobileFooter";

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
      </body>
    </html>
  );
}
