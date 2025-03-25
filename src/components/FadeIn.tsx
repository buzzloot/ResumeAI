import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
  threshold = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(current);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-8";
        case "down":
          return "opacity-0 -translate-y-8";
        case "left":
          return "opacity-0 translate-x-8";
        case "right":
          return "opacity-0 -translate-x-8";
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0";
  };

  return (
    <div
      ref={ref}
      className={cn(
        getDirectionStyles(),
        "transition-all will-change-transform",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
