"use client";

import { useEffect, useRef } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    async function initLenis() {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as { raf: (time: number) => void; destroy: () => void };

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
