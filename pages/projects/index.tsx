import Navigation_Alternate from "../../components/Navigation_Alternate";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function projects() {
  return (
    <div className="w-full mx-auto tracking-wide text-gray-200 bg-custom_dark font-extralight font-montserrat">
      <Navigation_Alternate />
      <div className="flex flex-col items-center h-full px-10 py-16 bg-custom_light lg:py-20">
        <h1 className="pb-10 font-serif text-5xl text-custom_dark lg:pb-14 lg:text-6xl group">
          My <strong className="text-custom_highlight">Projects</strong>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom_highlight"></span>
        </h1>
        <div>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap lg:gap-12">
            <ProjectCard
              title="Mediterraneo"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://mediterraneo-restaurant-template.vercel.app/"
              synopsis="A vibrant and elegant website built for Mediterraneo, an authentic Greek restaurant. Developed with React.js and styled for a warm, Mediterranean feel."
              icon="🌅"
            />
            <ProjectCard
              title="Three JS Portfolio"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/Three.js-Demo-Site"
              siteUrl="https://three-js-demo-site.vercel.app/"
              synopsis="A work-in-progress 3D portfolio site, built as a fun way to learn Three.js and bring my web presence into a more immersive space."
              icon="🍩"
            />
            <ProjectCard
              title="Escencia"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/escencia-restaurant-template"
              siteUrl="https://escencia-restaurant-template.vercel.app/"
              synopsis="A sleek, modern website designed for Escencia, a Spanish fusion restaurant. Built with Next.js to deliver fast performance and smooth UX."
              icon="🍣"
            />
            <ProjectCard
              title="Sipp"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://sipp-site.vercel.app/"
              synopsis="A clean, mobile-first site created for Sipp, a contemporary coffee house. Built with Next.js and designed for a cozy, inviting experience on any device."
              icon="☕"
            />
            <ProjectCard
              title="3D Stoic Expo Room"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/Stoic_Site"
              siteUrl="https://stoic-hub-alpha.vercel.app/"
              synopsis="Built while diving into *Meditations* by Marcus Aurelius, this 3D expo room was my way of mixing ancient Stoic wisdom with modern Three.js experiments."
              icon="🌤️"
            />
            <ProjectCard
              title="Three JS Galaxies"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/Three.js-Galaxy-Generator"
              siteUrl="https://three-js-galaxy-generator-eight.vercel.app/"
              synopsis="A cosmic particle playground built with Three.js, simulating a swirling galaxy through interactive 3D visuals."
              icon="🌃"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
