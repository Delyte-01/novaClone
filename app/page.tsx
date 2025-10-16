import Header from "@/components/Header";
import Discover from "@/feature/home-section/dicover-section-plus";
import DiscoverSection from "@/feature/home-section/discover-section";
import Hero from "@/feature/home-section/Hero";
import ScheduleConsult from "@/feature/home-section/schedule";
import CoreSection from "@/feature/home-section/service-section";
import ChooseSection from "@/feature/home-section/why-choose-section";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoreSection />
      <ChooseSection />
      <ScheduleConsult />
      <DiscoverSection />
      <Discover />
    </div>
  );
}
