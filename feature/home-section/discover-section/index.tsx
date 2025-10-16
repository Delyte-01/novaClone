import { Button } from "@/components/ui/button";
import React from "react";

const DiscoverSection = () => {
  return (
    <div
      className="container-padding min-h-[50vh] py-10 flex justify-center w-full bg-no-repeat bg-cover bg-center bg-fixed relative "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1760596475/premium_photo-1726783362305-0582cc6dceef_ndoctz.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/76" />
      <div className="relative flex flex-col justify-center gap-4  w-full items-center">
        <h1 className="poppins-bold text-2xl md:text-3xl lg:text-4xl text-center lg:max-w-[60%] md:max-w-[50%] text-white">
          Explore tailored solutions designed to fuel your business growth
        </h1>
        <Button className="uppercase  cursor-pointer bg-blue-700">Discover more</Button>
      </div>
    </div>
  );
};

export default DiscoverSection;
