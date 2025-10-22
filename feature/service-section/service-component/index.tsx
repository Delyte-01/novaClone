
import { Button } from "@/components/ui/button";
import { CircleArrowOutDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

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
  id
}: ServiesPropsType) => {

     

    
  return (
    <div id={id} className="container-padding  min-h-screen bg-[#f3f3f3] scroll-mt-20 ">
      <div className="flex flex-col gap-7 md:flex-row py-20">
        <div className="flex-1  flex flex-col gap-4 ">
          <div className="flex flex-col gap-3 mb-10 ">
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
                className="mb-5 flex gap-3 items-center px-2 bg-white py-4 rounded-lg"
              >
                <span>
                  <CircleArrowOutDownRight className="text-red-600" />
                </span>
                <div className="inline">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 text-center items-center">
          <Image
            src={imgUrl}
            width={500}
            height={500}
            alt=""
            className="object-cover w-full md:h-[600px]"
          />
          <h2>{param}</h2>
          <Button className="uppercase">Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Servicecomponent;
