
import type { Metadata } from "next";
import HomePageClient from "@/features/home/components/HomePageClient";

export const metadata: Metadata = {
  title: "ResuAI | AI Resume Analyzer",
  description: "Smart feedback for your dream job!",
};

export default function HomePage() {
  return <HomePageClient />;
}
