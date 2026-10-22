
"use client";

import { usePuterStore } from "@/lib/puter";
import Script from "next/script";
import type { ReactNode } from "react";

type PuterProviderProps = {
  children: ReactNode;
};

export default function PuterProvider({
  children,
}: PuterProviderProps) {
  const init = usePuterStore((state) => state.init);

  return (
    <>
      <Script
        src="https://js.puter.com/v2/"
        strategy="afterInteractive"
        onReady={() => init()}
      />

      {children}
    </>
  );
}
