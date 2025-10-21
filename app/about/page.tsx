import HeroSection from "@/components/hero-section";
import AboutUsSection from "@/feature/about-section/about-us-section";
import MissionValueSection from "@/feature/about-section/value";
import FaqSection from "@/feature/home-section/faq-section";
import ChooseSection from "@/feature/home-section/why-choose-section";
import React from "react";

export default function AboutPage() {
  const url =
    "https://res.cloudinary.com/dk5mfu099/image/upload/v1761037866/wmremove-transformed_2_bsnh49_guhpcd.jpg";
  return (
    <div>
      <HeroSection title="About us" url={url} />
      <AboutUsSection />
      <MissionValueSection />
      <ChooseSection />
      <FaqSection />
    </div>
  );
}
