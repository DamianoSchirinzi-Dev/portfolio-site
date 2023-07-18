import Navigation_Alternate from "../../components/Navigation_Alternate";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function projects() {
  return (
    <div className="w-full mx-0 tracking-wide text-gray-200 bg-custom_dark font-extralight font-montserrat">
      <Navigation_Alternate />
      <div className="flex flex-col items-center h-full px-10 py-16 bg-custom_light lg:py-20">
        <h1 className="pb-10 font-serif text-5xl text-custom_dark lg:pb-14 lg:text-6xl group">
          My <strong className="text-custom_highlight">Projects</strong>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom_highlight"></span>
        </h1>
        <div>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap lg:gap-12">
            <ProjectCard
              title="Mediterraneo Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I created for an authentic Greek restaurant, Mediterraneo."
            />
            <ProjectCard
              title="Arctic Games Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I designed and created for the games studio 'Arctic Games'"
            />
            <ProjectCard
              title="Weather App"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A frontend application made with Next.js that interacts with a weather API to bring live weather information"
            />

            <ProjectCard
              title="Mediterraneo Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I created for an authentic Greek restaurant, Mediterraneo."
            />
            <ProjectCard
              title="Arctic Games Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I designed and created for the games studio 'Arctic Games'"
            />
            <ProjectCard
              title="Weather App"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A frontend application made with Next.js that interacts with a weather API to bring live weather information"
            />

            <ProjectCard
              title="Mediterraneo Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I created for an authentic Greek restaurant, Mediterraneo."
            />
            <ProjectCard
              title="Arctic Games Site"
              codeUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              siteUrl="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
              synopsis="A website I designed and created for the games studio 'Arctic Games'"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
