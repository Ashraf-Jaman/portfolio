"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({ children, priority = false }: { children: ReactNode; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(priority);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={visible ? "scroll-drop-bounce" : "-translate-y-16 scale-[0.97] opacity-0"}>{children}</div>;
}
