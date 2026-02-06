"use client";

import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

interface MarqueeWrapperProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function MarqueeWrapper({
  children,
  speed = 80,
  direction = "left",
  className,
}: MarqueeWrapperProps) {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      gradient={false}
      className={cn("border-y border-[rgba(255,255,255,0.1)] bg-gradient-to-r from-[rgba(167,139,113,0.05)] via-[rgba(167,139,113,0.1)] to-[rgba(167,139,113,0.05)] py-8", className)}
    >
      {children}
    </Marquee>
  );
}
