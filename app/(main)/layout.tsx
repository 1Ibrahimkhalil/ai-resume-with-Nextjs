import Navbar from "@/components/layout/Navbar";
import AuthGuard from "@/features/auth/components/AuthGuard";
import { Suspense } from "react";
import Loading from "./loading";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <Suspense
        fallback={
          <Loading />
        }
      >
        <AuthGuard>{children}</AuthGuard>
      </Suspense>
    </>
  );
}
