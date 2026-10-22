
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PuterProvider from "@/components/providers/PuterProvider";

export const metadata: Metadata = {
  title: "ResuAI",
  description: "AI-powered resume analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PuterProvider>
          <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            {children}
          </main>
        </PuterProvider>
      </body>
    </html>
  );
}
