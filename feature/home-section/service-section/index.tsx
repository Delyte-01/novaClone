import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { coreValues } from "@/data";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const CoreSection = () => {
  return (
    <div className="container-padding  py-10 md:py-20 flex flex-col gap-4">
      <div className=" uppercase flex justify-center py-5">
        <h1 className="poppins-bold text-3xl sm:text-4xl text-[#4A4A4A]">
          Our Core Services
        </h1>
      </div>
      <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen">
        {coreValues.map((data) => (
          <Card
            key={data.id}
            className=" hover:scale-105 hover:shadow-2xl transition-scale ease-in-out duration-500 shadow-gray-400 "
          >
            <CardContent className="flex flex-col  h-full py-7 ">
              <CardHeader className="flex  gap-4  flex-col">
                <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1760527240/Shield_fidhf5.png"
                      alt=""
                      width={50}
                      height={50}
                      className="object-cover  w-20 rounded-full"
                    />
                  </div>

                  <h2 className="font-semibold  text-[20px] poppins-bold ">
                    {data.title}
                  </h2>
                </div>
                <div className="flex">
                  <p className="font-semibold text-gray-600 text-[17px] ">
                    {data.subTitle}
                  </p>
                </div>
              </CardHeader>
              <CardDescription className="px-3 py-6 md:text-[16px] mb-4 text-sm text-[#717A84] ">
                {data.text}
              </CardDescription>
              <CardFooter>
                <Button className="flex items-center uppercase bg-[#0967D2] hover:bg-[#0967D2]/60 cursor-pointer">
                  Learn More <ArrowRight />{" "}
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoreSection;
