import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000, start = 0, active = true) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(start + (end - start) * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start, active]);

  return value;
}
