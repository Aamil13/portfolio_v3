"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Extra CSS classes forwarded to the wrapper element (e.g. "reveal-d2") */
  className?: string;
  style?: CSSProperties;
  /** HTML tag to render — defaults to "div" */
  as?: ElementType;
  /** IntersectionObserver threshold (0–1). Default 0.12 */
  threshold?: number;
};

/**
 * Scroll-triggered reveal wrapper.
 * Adds the `reveal` CSS class on mount, then adds `in-view` once the element
 * crosses the viewport threshold via IntersectionObserver.
 *
 * No animation library required — works purely with the `.reveal` / `.in-view`
 * CSS rules defined in globals.css.
 */
export function Reveal({
  children,
  className = "",
  style,
  as: Tag = "div",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
