"use client";
import { Button } from "@/components/ui/button";
import { useServiceAnimation } from "@/hooks/use-service-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CircleArrowOutDownRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ServiesPropsType {
  title: string;
  desc: string;
  subTitle: string;
  data: {
    title: string;
    desc: string;
  }[];
  param: string;
  imgUrl: string;
  id: string;
}

const Servicecomponent = ({
  title,
  desc,
  subTitle,
  data,
  imgUrl,
  param,
  id,
}: ServiesPropsType) => {
  const serviceRef = useRef<HTMLDivElement>(null);
  
  useServiceAnimation(serviceRef as React.RefObject<HTMLDivElement>);
  
  return (
    <div
      id={id}
      ref={serviceRef}
      className="container-padding min-h-screen bg-[#f3f3f3] scroll-mt-20 overflow-hidden"
    >
      <div className="flex flex-col gap-7 md:flex-row py-20">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4 content1">
          <div className="flex flex-col gap-3 mb-10">
            <h1 className="text-2xl poppins-bold md:text-4xl text-[#1b4962]">
              {title}
            </h1>
            <p>{desc}</p>
            <h2 className="poppins-bold">{subTitle}</h2>
          </div>

          <div>
            {data.map((item, index) => (
              <div
                key={index}
                className="mb-5 flex gap-3 items-center px-2 bg-white py-4 rounded-lg shadow-sm"
              >
                <span>
                  <CircleArrowOutDownRight className="text-red-600" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-5 text-center items-center content2">
          <Image
            src={imgUrl}
            width={500}
            height={500}
            alt={title}
            className="object-cover w-full md:h-[600px] rounded-xl"
          />
          <h2 className="text-xl font-semibold">{param}</h2>
          <Button className="uppercase">Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Servicecomponent;
