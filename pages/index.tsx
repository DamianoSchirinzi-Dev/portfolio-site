import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main>
      <div className="bg-custom_dark">
        <Navigation/>
        <HeroBanner />
      </div>

      <AboutSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
