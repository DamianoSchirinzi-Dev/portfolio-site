import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
      <main className="mx-0 tracking-wide text-gray-200 bg-custom_dark font-extralight font-montserrat">
        <Navigation/>
        <HeroBanner />
        <AboutSection />
        <ProjectsSection/>
        <Footer />
      </main>

      
  );
}
