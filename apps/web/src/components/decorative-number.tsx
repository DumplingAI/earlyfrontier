"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface DecorativeNumberProps {
  number: string;
  className?: string;
}

export function DecorativeNumber({ number, className }: DecorativeNumberProps) {
  const { ref, y, opacity } = useParallax(100);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={cn(
        "absolute text-decorative-number font-bold text-muted pointer-events-none select-none",
        className
      )}
      aria-hidden="true"
    >
      {number}
    </motion.div>
  );
}
