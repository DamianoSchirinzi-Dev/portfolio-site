import HeroBanner from "@/components/HeroBanner";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroBanner/>
        <Navigation />
      </div>
      
      <AboutSection />
    </main>
  );
}
