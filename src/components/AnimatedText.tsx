import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  words?: boolean;
  stagger?: number;
  once?: boolean;
  threshold?: number;
}

export default function AnimatedText({
  text,
  className,
  words = true,
  stagger = 0.05,
  once = true,
  threshold = 0.1,
}: AnimatedTextProps) {
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

  const renderText = () => {
    if (words) {
      return text.split(" ").map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-transform duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{
            transitionDelay: `${i * stagger}s`,
          }}
        >
          {word}&nbsp;
        </span>
      ));
    }

    return text.split("").map((char, i) => (
      <span
        key={i}
        className={cn(
          "inline-block transition-transform duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{
          transitionDelay: `${i * stagger}s`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {renderText()}
    </div>
  );
}
