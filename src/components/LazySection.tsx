import React, { useState, useEffect, useRef } from 'react';

export const LazySection = ({ children, minHeight = "50vh" }: { children: React.ReactNode, minHeight?: string }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load right before it comes into view
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : minHeight }}>
      {isIntersecting && children}
    </div>
  );
};
