"use client";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: unknown;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderThickness?: number;
  opacity?: number;
  glowIntensity?: number;
  beamBorderRadius?: number;
  pauseOnHover?: boolean;
  speedMultiplier?: number;
}

export const BorderBeam = ({
  className,
  size = 500,
  delay = 0,
  duration = 6,
  colorFrom = "#7400ff",
  colorTo = "#9b41ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderThickness = 2,
  opacity = 1,
  glowIntensity = 0,
  beamBorderRadius,
  pauseOnHover = false,
  speedMultiplier = 1,
}: BorderBeamProps) => {
  // Calculate actual duration based on speed multiplier
  const actualDuration = speedMultiplier
    ? duration / speedMultiplier
    : duration;

  // Path inset so beam stays centered inside the border
  const pathInset = borderThickness / 2;

  // Generate box shadow for glow effect
  const glowEffect =
    glowIntensity > 0
      ? `0 0 ${glowIntensity * 5}px ${glowIntensity * 2}px var(--color-from)`
      : undefined;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[mask-clip:padding-box,border-box]",
        "[mask-composite:intersect]",
        "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      )}
      style={{
        border: `${borderThickness}px solid transparent`, // ✅ dynamic border width
        ...({
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as Record<string, unknown>),
        ...style,
      } as React.CSSProperties}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          pauseOnHover && "group-hover:animation-play-state-paused",
          className
        )}
        style={{
          width: size,
          // ✅ SVG path so beam follows border correctly on all 4 sides
          offsetPath: `path("M ${pathInset},${pathInset} 
            H calc(100% - ${pathInset}) 
            V calc(100% - ${pathInset}) 
            H ${pathInset} 
            Z")`,
          opacity: opacity,
          boxShadow: glowEffect,
          borderRadius: beamBorderRadius ? `${beamBorderRadius}px` : undefined,
          ...style,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? ["100%", "0%"]
            : ["0%", "100%"], // ✅ runs smoothly around
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop", // ✅ no snapping
          ease: "linear",
          duration: actualDuration,
          delay: -delay,
          ...(typeof transition === "object" && transition !== null
            ? transition
            : {}),
        }}
      />
    </div>
  );
};
