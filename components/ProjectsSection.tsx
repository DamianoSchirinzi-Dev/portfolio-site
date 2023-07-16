import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center h-full px-8 gap-14 bg-custom_light">
      <h1 className="font-serif text-5xl text-custom_dark lg:text-6xl">
        My <strong className="text-custom_highlight">Projects</strong>
      </h1>

      <div className="flex flex-col items-center justify-center gap-8 pb-14 sm:flex-row sm:flex-wrap">
        <ProjectCard
          title="Mediterraneo Site"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          synopsis="Use the responsive variants of the width utilities to build responsive grid layouts."
        />
        <ProjectCard
          title="Arctic Games Site"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          synopsis="A website for an up and coming games studio!"
        />
        <ProjectCard
          title="Weather App"
          codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          synopsis="A Frontend Next App to get the weather!"
        />
      </div>
    </div>
  );
}
