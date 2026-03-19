'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Approach";
import WhatWeBuild from "@/components/home/Capabilities";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import Pricing from "@/components/home/Pricing";
import UseCases from "@/components/home/UseCases";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <WhatWeBuild />
      <HowItWorksPreview />
      <Pricing />
      <UseCases />
      <FAQ />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
