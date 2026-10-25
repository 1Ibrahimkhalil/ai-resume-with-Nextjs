
import { Suspense } from "react";
import type { Metadata } from "next";
import AuthPageClient from "@/features/auth/components/AuthPageClient";

export const metadata: Metadata = {
  title: "ResuAI | Auth",
  description: "Log into your account",
};

export default function AuthPage() {
  return (
    <Suspense fallback={<div />}>
      <AuthPageClient />
    </Suspense>
  );
}
