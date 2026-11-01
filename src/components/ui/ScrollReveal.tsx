"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-7 opacity-0";
      case "down":
        return "-translate-y-7 opacity-0";
      case "left":
        return "translate-x-7 opacity-0";
      case "right":
        return "-translate-x-7 opacity-0";
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transform transition-all will-change-transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
