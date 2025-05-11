import React, { useEffect, useRef } from "react";

export interface CustomerLogo {
  src: string;
  alt: string;
  height: number;
}

interface CustomersSectionProps {
  customers: CustomerLogo[];
  className?: string;
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content || customers.length === 0) return;

    // Duplicate content for infinite scroll effect
    content.innerHTML += content.innerHTML;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= content.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [customers]);

  return (
    <section className={`w-full overflow-hidden ${className ?? ""}`}>
      <div
        ref={containerRef}
        className="w-full overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        <div
          ref={contentRef}
          className="inline-flex gap-12"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                className="h-5 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
