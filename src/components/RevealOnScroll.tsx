import { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

const RevealOnScroll = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-5 transition-all duration-500 ease-in-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;