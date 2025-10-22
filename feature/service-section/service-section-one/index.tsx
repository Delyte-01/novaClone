import Image from 'next/image';
import React from 'react'

const ServiceContentOne = () => {
  return (
    <div className="flex container-padding flex-col md:flex-row gap-10 py-20 items-center justify-center">
      <div className="flex flex-col gap-3 py-4 justify-center flex-1 px-5">
        <h1 className="text-[#1b4962] text-2xl md:text-3xl lg:text-4xl poppins-bold">
          Our Services are Carefully Curated for Your Success.
        </h1>
        <p>
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