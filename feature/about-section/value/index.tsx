import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const MissionValueSection = () => {
  return (
    <div className="container-padding bg-[#cdcdce] min-h-screen py-20 place-content-center">
      <div className="flex justify-center uppercase mb-15">
        <h1 className="poppins-bold text-4xl md:text-5xl text-[#1b4962]">
          What drives us
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 ">
        <Card className="transition  duration-500 hover:shadow-2xl ring ring-blue-500">
          <CardContent className="flex flex-col gap-4 py-3 group ">
            <div className="overflow-hidden h-[254px] w-full">
              <Image
                src={
                  "https://res.cloudinary.com/dk5mfu099/image/upload/v1760726571/businessman-contemplating-in-the-office-looking-through-the-window_zs3ms3.jpg"
                }
                alt=""
                width={400}
                height={400}
                className="object-cover group-hover:scale-120 transition duration-500 w-full h-full"
              />
            </div>

            <CardTitle>
              <h2 className="poppins-bold text-[20px] text-[#1b4962]">
                A Vision Beyond Boundaries
              </h2>
            </CardTitle>
            <CardDescription className="text-[16px]">
              To be the leading global provider of financial and operational
              solutions, and the trusted partner of choice for businesses.
              Transforming how businesses manage their finance and operations
              through technology-driven services.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="transition  duration-500 hover:shadow-2xl ring ring-blue-500">
          <CardContent className="flex flex-col gap-4 py-3 group">
            <div className="overflow-hidden h-[254px] w-full">
              <Image
                src={
                  "https://res.cloudinary.com/dk5mfu099/image/upload/v1760776576/people-group_vudpx5.jpg"
                }
                alt=""
                width={420}
                height={400}
                className="object-cover group-hover:scale-120 transition duration-500 w-full h-full"
              />
            </div>
            <CardTitle>
              <h2 className="poppins-bold text-[20px] text-[#1b4962]">
                A Mission You Can Count On
              </h2>
            </CardTitle>
            <CardDescription className="text-[16px]">
              To empower businesses by providing seamless financial and
              operational solutions that simplify complexities, drive
              efficiency, and enable sustainable growth.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="transition  duration-500 hover:shadow-2xl ring ring-blue-500">
          <CardContent className="flex flex-col gap-4 py-3 group">
            <div className="overflow-hidden h-[254px] w-full">
              <Image
                src={
                  "https://res.cloudinary.com/dk5mfu099/image/upload/v1760726747/excited-coworkers-embracing-each-other-during-a-celebration-in-the-office_olgpgh.jpg"
                }
                alt=""
                width={400}
                height={400}
                className="object-cover group-hover:scale-120 transition duration-500 h-full w-full"
              />
            </div>
            <CardTitle>
              <h2 className="poppins-bold text-[20px] text-[#1b4962]">
                The Values That Define Us
              </h2>
            </CardTitle>
            <CardDescription className="text-[16px]">
              To be the leading global provider of financial and operational
              solutions, and the trusted partner of choice for businesses.
              Transforming how businesses manage their finance and operations
              through technology-driven services.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MissionValueSection;
