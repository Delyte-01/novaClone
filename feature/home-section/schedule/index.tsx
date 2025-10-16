import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const ScheduleConsult = () => {
  return (
    <div
      className="container-padding flex flex-col text-center py-20 md:py-0 justify-center min-h-screen md:min-h-[70vh] gap-5 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk5mfu099/image/upload/v1760554855/photo-1611095790444-1dfa35e37b52_hpqkno.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#cdcdcec5] " />
      <h2 className="poppins-bold text-xl leading-[2rem] relative z-10 text-[#08121D]">
        Are you launching a startup, scaling your operations, or aiming to
        elevate your financial performance? Our expert-led services will
        simplify every step of your journey. We provide comprehensive support
        covering business registration, integrated financial advisory,
        accounting solutions, and supply chain management. Join the community of
        forward-thinking businesses that trust NovaHills Consulting as their
        dedicated partner in driving sustainable growth and operational
        excellence.
      </h2>
      <h2 className="text-xl md:text-3xl font-semibold py-4 relative z-10">
        Start your journey with a free consultation today and experience the
        difference!
      </h2>
      <div className="relative z-10">
        <Button className="text-sm   font-bold py-7  rounded-[12px] cursor-pointer transition-all duration-500 uppercase bg-[#0967D2] hover:bg-gray-800">
          Schedule a consultation
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ScheduleConsult;
