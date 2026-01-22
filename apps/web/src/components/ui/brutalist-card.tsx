"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  decorativeNumber?: string;
}

export function BrutalistCard({
  children,
  className,
  decorativeNumber,
}: BrutalistCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden border-2 border-border bg-background p-12",
        "transition-colors duration-300",
        "hover:bg-accent hover:border-accent",
        "group",
        className
      )}
      whileHover={{ scale: 1.0 }}
    >
      {decorativeNumber && (
        <div
          className="absolute -right-8 -top-8 text-decorative-number text-muted opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          {decorativeNumber}
        </div>
      )}
      <div className="relative z-10 group-hover:text-accent-foreground transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
}
