"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ScheduleConsult = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const heading = headingRef.current;
    if (!heading) return;

    // Split text into lines
    const split = new SplitText(heading, { type: "lines" , mask:'lines', autoSplit:true});

    // Give each line its own overflow-hidden wrapper (GSAP auto-wraps lines in spans)
    gsap.set(heading, { perspective: 500 });
    gsap.set(split.lines, { overflow: "hidden", display: "block" });
    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
      },
    });
  }, []);
  return (
    <div
      className="container-padding flex flex-col text-center py-20 md:py-0 justify-center min-h-screen md:min-h-[70vh] gap-5 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1760612633/making-decision-on-the-move_txtqdk.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#cdcdcec5] " />
      <h2
        className="poppins-bold text-xl leading-[2rem] relative z-10 text-[#08121D] schedule-text"
        ref={headingRef}
      >
        Are you launching a startup, scaling your operations, or aiming to
        elevate your financial performance? Our expert-led services will
        simplify every step of your journey. We provide comprehensive support
        covering business registration, integrated financial advisory,
        accounting solutions, and supply chain management. Join the community of
        forward-thinking businesses that trust NovaHills Consulting as their
        dedicated partner in driving sustainable growth and operational
        excellence.
      </h2>
      <h2 className="text-xl md:text-3xl font-semibold py-4 relative z-10">
        Start your journey with a free consultation today and experience the
        difference!
      </h2>
      <div className="relative z-10">
        <Button className="text-sm   font-bold py-7  rounded-[12px] cursor-pointer transition-all duration-500 uppercase bg-[#0967D2] hover:bg-gray-800">
          Schedule a consultation
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ScheduleConsult;
