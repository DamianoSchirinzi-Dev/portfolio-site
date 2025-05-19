import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div
      id="section-projects"
      className="flex flex-col items-center h-full px-8 pb-4 border-t border-gray-400 gap-14 bg-custom_light"
    >
      <Link href="/projects">
        <h1 className="pt-20 font-serif text-5xl text-custom_dark lg:pb-2 lg:text-6xl group">
          My <strong className="text-custom_highlight">Projects</strong>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom_highlight"></span>
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center gap-8 pb-14 sm:flex-row sm:flex-wrap lg:gap-12">
        <ProjectCard
          title="Mediterraneo"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://mediterraneo-restaurant-template.vercel.app/"
          synopsis="A vibrant and elegant website built for Mediterraneo, an authentic Greek restaurant. Developed with React.js and styled for a warm, Mediterranean feel."
          icon="🌅"
        />
        <ProjectCard
          title="Escencia"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/escencia-restaurant-template"
          siteUrl="https://escencia-restaurant-template.vercel.app/"
          synopsis="A sleek, modern website designed for Escencia, a Japanese fusion restaurant. Built with Next.js to deliver fast performance and smooth UX."
          icon="🍣"
        />
        <ProjectCard
          title="Sipp"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://sipp-site.vercel.app/"
          synopsis="A clean, mobile-first site created for Sipp, a contemporary coffee house. Built with Next.js and designed for a cozy, inviting experience on any device."
          icon="☕"
        />
      </div>
    </div>
  );
}
