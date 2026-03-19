'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import Approach from "@/components/home/Approach";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <Approach />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
