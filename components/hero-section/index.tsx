"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

interface HeroPageprops {
  url: string;
  title: string;
}
gsap.registerPlugin(SplitText);

const HeroSection = ({ url, title }: HeroPageprops) => {
  const url1 =
    "https://res.cloudinary.com/dk5mfu099/image/upload/v1760612408/skyscrapers-in-the-business-center-financial-district-sunny-day-blue-sky-empty-space-moscow_o1obow.jpg";
  const url3 =
    "https://res.cloudinary.com/dk5mfu099/image/upload/v1760704322/financial-audit-financial-management-business-account-tax-report-auditor-use-laptop-with_b72eno.jpg";
  const url2 =
    "https://res.cloudinary.com/dk5mfu099/image/upload/v1760704476/networked-communications-systems-are-interconnected_qwlzed.jpg";



  useGSAP(() => {
    let split;
    SplitText.create(".hero-section-text", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
          color: "red",
          ease: "power4.out",
        });
      },
    });
  }, []);
  return (
    <div
      className="min-h-[30vh] container-padding  flex py-20 relative bg-cover bg-center  items-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-[#262626] to-[#1B49624D]" />
      <div className="text-white relative z-10 hero-section-text">
        <h1 className="poppins-bold text-[32px] md:text-5xl px-4">{title}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
