import HeroBanner from "@/components/HeroBanner";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <div className="bg-custom_dark">
        <Navigation />
        <HeroBanner/>
      </div>
      
      <AboutSection />
    </main>
  );
}
