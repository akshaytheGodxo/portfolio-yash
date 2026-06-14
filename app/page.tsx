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
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <main>
      <FloatingWhatsApp />
      <FadeUp>
        <Navbar /> <Hero />
      </FadeUp>

      <FadeUp>
        <Clients />
      </FadeUp>
      <FadeUp>
        <Services />
      </FadeUp>
      <FadeUp>
        <Work />
      </FadeUp>
      <FadeUp>
        <Testimonials />
      </FadeUp>
      <FadeUp>
        <WhyUs />
      </FadeUp>
      <FadeUp>
        <Process />
      </FadeUp>
      <FadeUp>
        <FAQ />
      </FadeUp>
      <FadeUp>
        <Contact />
      </FadeUp>
      <FadeUp>
        <Footer />
      </FadeUp>
    </main>
  );
}
