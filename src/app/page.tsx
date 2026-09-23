import Hero from "@/components/Hero";
import HomeAdvisor from "@/components/HomeAdvisor";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAdvisor />
      <Locations />
      <Reviews />
      <HomeCTA />
    </main>
  );
}
