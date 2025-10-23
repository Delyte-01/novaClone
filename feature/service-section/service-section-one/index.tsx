"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import React from 'react'


gsap.registerPlugin(ScrollTrigger, SplitText);
const ServiceContentOne = () =>
{
     useGSAP(() => {
       const titleSplit = new SplitText(".title", {
         type: "words,lines",
         mask: "lines",
       });
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

       
     }, []);
  return (
    <div className="flex container-padding flex-col md:flex-row gap-10 py-20 items-center justify-center">
      <div className="flex flex-col gap-3 py-4 justify-center flex-1 px-5">
        <h1 className="text-[#1b4962] text-2xl md:text-3xl lg:text-4xl poppins-bold title">
          Our Services are Carefully Curated for Your Success.
        </h1>
        <p className='text'>
          At NovaHills Consulting, our services are designed to empower Small
          and Medium-sized Enterprises (SMEs) and Startups. We are driven by a
          commitment to deliver excellence, integrity, and personalized support.
          By providing tailored financial and operational solutions, we aim to
          foster sustainable growth and long-term value creation for businesses.
        </p>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden ">
        <Image
          src="https://res.cloudinary.com/dk5mfu099/image/upload/v1760727247/a-man-makes-the-word-acronym-abbreviation-cfo-chief-financial-officer-financial-management-in_a5v0ua.jpg"
          alt="service image"
          width={500}
          height={500}
          className="w-full  object-cover hover:scale-110 transition duration-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ServiceContentOne