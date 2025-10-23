// hooks/useServiceAnimation.ts
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useServiceAnimation = (ref: RefObject<HTMLDivElement>) => {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          });

          tl.from(".content1", {
            opacity: 0,
            x: -150,
            duration: 0.8,
            ease: "power3.out",
          }).from(
            ".content2",
            {
              opacity: 0,
              x: 150,
              scale: 0.8,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }, ref);

        return () => ctx.revert();
      });

      return () => mm.revert();
    },
    { scope: ref }
  );
};
