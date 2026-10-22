import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
        <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
