"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  decorativeNumber?: string;
}

export function GlassCard({
  children,
  className,
  decorativeNumber,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12",
        "transition-all duration-500",
        "hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(167,139,113,0.3)] hover:shadow-[0_0_30px_rgba(167,139,113,0.1)]",
        "group",
        className
      )}
      whileHover={{ scale: 1.0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {decorativeNumber && (
        <div
          className="absolute -right-8 -top-8 text-decorative-number text-[#a78b71] opacity-[0.07] pointer-events-none"
          aria-hidden="true"
        >
          {decorativeNumber}
        </div>
      )}
      <div className="relative z-10 transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
}
