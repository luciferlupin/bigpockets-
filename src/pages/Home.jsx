import Hero from "../components/sections/Hero";
import StatsBanner from "../components/sections/StatsBanner";
import HowItWorks from "../components/sections/HowItWorks";
import SavingsCalculator from "../components/sections/Calculator";
import FeaturedProperties from "../components/sections/Properties";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <SavingsCalculator />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
