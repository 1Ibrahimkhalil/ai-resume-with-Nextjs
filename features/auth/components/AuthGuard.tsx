
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { usePuterStore } from "@/lib/puter";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth, isLoading } = usePuterStore();
  const pathname = usePathname();
  const router = useRouter();

  const isProtectedRoute =
    pathname === "/upload" ||
    pathname === "/wipe" ||
    pathname.startsWith("/resume/");

  const isCheckingAuth = isLoading || !auth.isAuthenticated;

  useEffect(() => {
    if (!isProtectedRoute || isLoading) return;

    if (!auth.isAuthenticated) {
      router.replace(
        `/auth?next=${encodeURIComponent(pathname)}`
      );
    }
  }, [
    isProtectedRoute,
    isLoading,
    auth.isAuthenticated,
    pathname,
    router,
  ]);

  return (
    <>
      <div
        style={{
          visibility:
            isProtectedRoute && isCheckingAuth
              ? "hidden"
              : "visible",
        }}
        aria-hidden={isProtectedRoute && isCheckingAuth}
      >
        {children}
      </div>

      {isProtectedRoute && isCheckingAuth && (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-sm text-slate-500">
            Checking authentication...
          </p>
        </div>
      )}
    </>
  );
}
