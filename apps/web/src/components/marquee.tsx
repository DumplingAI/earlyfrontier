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
      className={cn("border-y-2 border-border bg-accent py-8", className)}
    >
      {children}
    </Marquee>
  );
}
