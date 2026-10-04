import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Personalized from "@/components/Personalized";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import WhoFor from "@/components/WhoFor";
import WhyGymTray from "@/components/WhyGymTray";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Waitlist />
        <Problem />
        <Solution />
        <HowItWorks />
        <Personalized />
        <Features />
        <ProductPreview />
        <WhoFor />
        <WhyGymTray />
        <Faq />
        {/* Future sections (Final Waitlist CTA, Footer...) go here. */}
      </main>
    </>
  );
}
