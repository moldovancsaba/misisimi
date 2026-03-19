'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Approach"; // Modified in place
import WhatWeBuild from "@/components/home/Capabilities"; // Modified in place
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <WhatWeBuild />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
