"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const AboutUsSection = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title", { type: "words,lines",mask:"lines" });
    const paragraphSplit = new SplitText(".text", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
    });

    // 2️⃣ Cinematic staggered title animation
    gsap.from(titleSplit.words, {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.04,
      duration: 1,
      ease: "power4.out",
    });

    // 3️⃣ Parallax + fade-in for text lines
    gsap.from(paragraphSplit.lines, {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });

    // 4️⃣ Parallax image slide-in from right
    gsap.to(
      ".image ",
      {
        scrollTrigger: {
          trigger: ".image",
          start: "top center",
          // scrub: true,
        },
        // xPercent: 0,
        opacity: 1,
        scale:1,
        duration: 1.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="about-section container-padding flex flex-col md:flex-row min-h-screen py-20 gap-7 overflow-hidden">
      <div className="flex-1  flex flex-col space-y-10 justify-center">
        <h2 className="font-semibold ">NOVAHILLS CONSULTING LIMITED</h2>
        <h1 className=" title poppins-bold text-3xl md:text-4xl lg:text-5xl text-[#1b4962]">
          Who We Are
        </h1>
        <p className=" text-[16px] text-gray-600 text ">
          NovaHills Consulting was founded to empower businesses with
          streamlined financial and operational solutions. We understand that in
          today’s fast-paced world, businesses need more than traditional
          services. They need smart, scalable, and sustainable solutions backed
          by experience, technology, innovation, and strategy.
        </p>
        <p className=" text-[16px] text-gray-600 text">
          Our comprehensive suite of financial and operational solutions
          includes fractional CFO services, outsourced accounting services,
          accounting system automation, supply chain management, business
          registration and compliance.
        </p>
        <p className=" text-[16px] text-gray-600 text">
          Our multidisciplinary team of professionals and industry experts bring
          years of experience across sectors such as fintech, hospitality,
          manufacturing, energy, technology, e-commerce, healthcare, real
          estate, non-profit, and more. We blend deep expertise with modern
          tools to deliver results that matter.
        </p>
      </div>
      <div className="flex-1  overflow-hidden rounded-2xl image opacity-0 scale-75">
        <Image
          src="https://res.cloudinary.com/dk5mfu099/image/upload/v1760726383/black-female-business-leader-giving-a-speech-on-a-seminar-and-looking-at-camera_uhgrme.jpg"
          alt="about us image"
          width={800}
          height={800}
          className="object-cover h-[400px] md:h-[610px] hover:scale-110 transition duration-500"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
