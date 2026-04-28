"use client";

import { useState, useEffect, useRef } from "react";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 1800,
  decimals = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) {
  const [displayValue, setDisplayValue] = useState(end);
  const hasStartedRef = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const runAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const startTime = performance.now();
      const range = end - start;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = start + range * easedProgress;

        setDisplayValue(Number(currentValue.toFixed(decimals)));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration, decimals]);

  const formatted = `${prefix}${displayValue.toLocaleString()}${suffix}`;

  return { ref: elementRef, count: displayValue, formatted };
}
