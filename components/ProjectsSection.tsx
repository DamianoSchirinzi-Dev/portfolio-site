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
          title="Mediterraneo Site"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://mediterraneo-restaurant-template.vercel.app/"
          synopsis="A website I created for an authentic Greek restaurant, Mediterraneo."
          icon="🌅"
        />
        <ProjectCard
          title="Free Framer Motion Components"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/framer-motion-playground"
          siteUrl="https://framer-motion-playground-4m4w.vercel.app/"
          synopsis="A small website / repo I use to store useful and re-usable framer motion animated React components!"
          icon="🍃"
        />
        <ProjectCard
          title="Arctic Games Site"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          synopsis="A website I designed and created for the games studio 'Arctic Games'"
          icon="🎮"
        />
      </div>
    </div>
  );
}
