
"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useAuthRedirect(isAuthenticated: boolean) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const next = searchParams.get("next");

  useEffect(() => {
    if (!isAuthenticated || pathname !== "/auth") {
      return;
    }

    const destination =
      next && next.startsWith("/") && !next.startsWith("//")
        ? next
        : "/";

    router.replace(destination);
  }, [isAuthenticated, pathname, next, router]);
}
