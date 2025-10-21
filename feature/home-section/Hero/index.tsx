"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = lineRef.current;
    if (!el) return;

    gsap.from(el, {
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      y: 50,
    });

    let split;
    SplitText.create(".hero-text-split", {
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
      className="container-padding min-h-[80vh] bg-cover bg-center bg-no-repeat  flex   relative py-10 "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1761037866/wmremove-transformed_2_bsnh49_guhpcd.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-[#262626] to-[#1B49624D] " />
      <div className="relative z-10 text-white  flex flex-col w-full text-center   items-center justify-center">
        <div className="overflow-hidden">
          <h3
            ref={lineRef}
            className="text-lg sm:text-xl md:text-2xl mb-6 text-[#CEE1F6] leading-relaxed font-bold hero-title"
          >
            WELCOME TO NOVAHILLS CONSULTING LIMITED
          </h3>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-6 leading-tight poppins-bold hero-text-split">
          Empowering Businesses with Seamless Financial and Operational
          Solutions
        </h1>
        <Button className="bg-white h-[60px] cursor-pointer uppercase text-[#0967D2] px-8 py-4 rounded-lg font-bold md:text-[16px] transition-all duration-500 hover:bg-[#0967D2] hover:text-gray-100 hover:scale-105 shadow-lg text-sm box">
          Request a free consultation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
