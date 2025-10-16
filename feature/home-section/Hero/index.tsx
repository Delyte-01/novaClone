import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div
      className="container-padding min-h-[80vh] bg-cover bg-center bg-no-repeat  flex   relative py-10"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1760435784/photo-1758873271772-6bbc792c1514_corohq.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 " />
      <div className="relative z-10 text-white  flex flex-col w-full text-center   items-center justify-center">
        <h3 className="text-lg sm:text-xl md:text-2xl mb-6 text-[#CEE1F6] leading-relaxed font-bold">
          WELCOME TO NOVAHILLS CONSULTING LIMITED
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-6 leading-tight poppins-bold">
          Empowering Businesses with Seamless Financial and Operational
          Solutions
        </h1>
        <Button className="bg-white h-[60px] cursor-pointer uppercase text-[#0967D2] px-8 py-4 rounded-lg font-bold md:text-[16px] transition-all duration-500 hover:bg-[#0967D2] hover:text-gray-100 hover:scale-105 shadow-lg text-sm">
          Request a free consultation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
