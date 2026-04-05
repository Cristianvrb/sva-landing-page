import React, { useState, useEffect, useRef } from 'react';

export const LazySection = ({ children, minHeight = "50vh", id }: { children: React.ReactNode, minHeight?: string, id?: string }) => {
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
    <div id={id} ref={ref} style={{ minHeight: isIntersecting ? 'auto' : minHeight }}>
      {isIntersecting && (
        <React.Suspense fallback={<div className="flex items-center justify-center w-full h-full min-h-[200px]"><div className="w-10 h-10 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div></div>}>
          {children}
        </React.Suspense>
      )}
    </div>
  );
};
