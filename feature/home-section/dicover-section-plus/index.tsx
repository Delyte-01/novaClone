"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Discover = () => {
  const discoverRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: discoverRef.current,
        start: "top center",
        end: "bottom 80%",
        // scrub: true,
      },
    });

    
       tl.from(".content1", { scale: 0.5, opacity: 0, x:-250,overflow:"hidden" });
       tl.from(".content2", { scale: 0.5, opacity: 0, y:100  });
  }, []);
  return (
    <div
      className="container-padding min-h-[60vh] py-20 flex flex-col md:flex-row justify-center md:gap-8   bg-stone-100"
      ref={discoverRef}
    >
      <div className="flex-1  md:h-[400px] relative   overflow-clip mb-12 md:mb-0 content1">
        <Image
          src={
            "https://res.cloudinary.com/dk5mfu099/image/upload/v1760615309/giving-his-team-a-sense-of-direction-to-follow_ns4fbb.jpg"
          }
          alt="dicover image"
          width={400}
          height={400}
          className="object-cover object center hover:scale-110 transition-all duration-500 cursor-pointer  w-full h-full"
        />
      </div>
      <div className="flex-1 flex justify-center flex-col items-start content2">
        <h1 className="poppins-bold mb-8 text-[20px] sm:text-2xl md:text-[27px] text-[#1b4962]">
          Discover how seamless financial and operational management can
          transform your business. Start with a free consultation today!
        </h1>
        <Button className="uppercase bg-[#1F64E7]">
          contact us <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Discover;
