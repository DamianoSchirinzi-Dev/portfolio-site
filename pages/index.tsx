import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <div className="bg-custom_dark">
        <Navigation/>
        <HeroBanner />
      </div>

      <AboutSection />
      <BlogSection />
      <ProjectsSection/>
      <Footer />
    </main>
  );
}
