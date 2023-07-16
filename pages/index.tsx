import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <div className="tracking-wide text-gray-200 bg-custom_dark font-extralight font-montserrat">
        <Navigation/>
        <HeroBanner />
      </div>

      <AboutSection />
      <ProjectsSection/>
      <Footer />
    </main>
  );
}
