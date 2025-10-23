"use client"
import { FaqArry } from "@/data";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";


const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#f3f3f3] backdrop-blur-md rounded-xl p-5 mb-4  cursor-pointer transition-all duration-300 shadow-sm shadow-[#dda7f8]"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-medium text-[#1b4962]">
          {question}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};



const FaqSection = () =>
{
  
    return (
      <div className="container-padding py-30 flex flex-col md:flex-row gap-6 min-h-screen" id='faq' >
        <div className="flex-1  flex  flex-col gap-4 ">
          <h1 className="poppins-bold text-3xl text-[#1b4962]">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-sm md:text-[16px] text-gray-600 max-w-[80%]">
            Get answers to frequently asked questions about NovaHills. If you
            need further assistance, our customer support team is always here to
            help with any enquiries or concerns.
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dk5mfu099/image/upload/v1760610562/WhatsApp-Image-2025-06-24-at-11.07.24-1_aja2wb.jpg"
            }
            alt="faq-image"
            width={400}
            height={400}
            className="object-cover object-center w-[520px]"
          />
        </div>
        <div className="flex-1 ">
          {FaqArry.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    );
};

export default FaqSection;


