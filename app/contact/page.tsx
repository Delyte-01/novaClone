import HeroSection from '@/components/hero-section';
import ContactForm from '@/feature/contact-section/contact-form';
import MapSection from '@/feature/contact-section/map-section';
import React from 'react'

export default function ContactPage() {
 const url =
   "https://res.cloudinary.com/dk5mfu099/image/upload/v1760704476/networked-communications-systems-are-interconnected_qwlzed.jpg";
  return (
    <div>
      <HeroSection title="Contact " url={url} />
      <ContactForm />
      <MapSection />
    </div>
  );
}
