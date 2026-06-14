"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Client";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/Whyus";
import Process from "@/components/Process";
import FAQ from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FadeUp><Hero /></FadeUp>
      <FadeUp><Clients /></FadeUp>
      <FadeUp><Work /></FadeUp>
      <FadeUp><Services /></FadeUp>
      <FadeUp><WhyUs /></FadeUp>
      <FadeUp><Process /></FadeUp>
      <FadeUp><Testimonials /></FadeUp>
      <FadeUp><FAQ /></FadeUp>
      <FadeUp><Contact /></FadeUp>
      <Footer />
    </main>
  );
}
