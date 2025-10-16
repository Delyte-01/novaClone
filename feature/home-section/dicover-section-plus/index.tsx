import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Discover = () => {
  return (
    <div className="container-padding min-h-[60vh] py-20 flex flex-col md:flex-row justify-center md:gap-8">
      <div className="flex-1  md:h-[400px] relative   overflow-clip mb-12 md:mb-0">
        <Image
          src={
            "https://res.cloudinary.com/dk5mfu099/image/upload/v1760597615/photo-1525130413817-d45c1d127c42_ifm4wz.jpg"
          }
          alt="dicover image"
          width={400}
          height={400}
          className="object-cover object center hover:scale-110 transition-all duration-500 cursor-pointer rounded-lg w-full h-full"
        />
      </div>
      <div className="flex-1 flex justify-center flex-col items-start ">
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
