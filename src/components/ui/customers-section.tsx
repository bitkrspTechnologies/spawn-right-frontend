import React from "react";
import { ChevronRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

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
  return (
    <section className={` pb-4 md:pb-8 w-full ${className ?? ""}`}>
      <div className="group relative m-auto max-w-5xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
      className="mx-auto mt-2 grid max-w-2xl grid-cols-6 items-center gap-x-12 gap-y-4 sm:gap-x-16 sm:gap-y-6"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex">
              <img
                className="mx-auto h-20 w-auto dark:invert object-contain"
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width="auto"
                // style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}