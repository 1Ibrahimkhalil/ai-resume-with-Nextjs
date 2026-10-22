
import type { Metadata } from "next";

import "./globals.css";
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
            {children}
          </main>
        </PuterProvider>
      </body>
    </html>
  );
}
