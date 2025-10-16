import { ChooseArry } from "@/data";
import Image from "next/image";
import React from "react";

const ChooseSection = () => {
  return (
    <div
      className="container-padding text-white bg-[#1F64E7] min-h-screen w-full py-10 md:py-20 flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1760555192/4f2dd2de4e267b10d29393c13244a18f3e542b3b_euo7l8.png')",
      }}
    >
      <div className=" uppercase flex justify-center py-5">
        <h1 className="poppins-bold text-3xl sm:text-4xl  ">
          WHY CHOOSE NOVAHILLS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mt-5 text-gray-600 ">
        {ChooseArry.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-10 flex flex-col justify-center gap-3 shadow-2xl"
          >
            <div>
              <Image
                src={
                  "https://res.cloudinary.com/dk5mfu099/image/upload/v1746600767/profile-pic_zl0v3b.jpg"
                }
                alt={data.title}
                width={80}
                height={50}
                className="object-cover w-18 h-18 "
              />
            </div>
            <h1 className="poppins-bold text-2xl  text-gray-700">
              {data.title}
            </h1>
            <p className="">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
