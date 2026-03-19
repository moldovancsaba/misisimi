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
  const sections = [
    <Navbar key="navbar" />,
    <Hero key="hero" />,
    <Problem key="problem" />,
    <Solution key="solution" />,
    <WhatWeBuild key="capabilities" />,
    <HowItWorksPreview key="how-it-works" />,
    <Pricing key="pricing" />,
    <UseCases key="use-cases" />,
    <FAQ key="faq" />,
    <CTASection key="cta" />,
    <ContactForm key="contact" />,
    <Footer key="footer" />
  ];

  return <main>{sections}</main>;
}
