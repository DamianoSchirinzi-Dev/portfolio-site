import { ProjectCardProps } from "../types/Types";
import { motion } from "framer-motion";

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      className="w-full py-6 bg-white rounded-lg shadow-lg md:w-96 text-custom_dark lg:py-10"
    >
      <div className="relative flex flex-col pl-12 pr-10">
        <h1 className="absolute top-0 text-3xl left-1">🔺</h1>
        <h1 className="text-lg font-bold sm:text-xl lg:text-2xl xl:text-4xl lg:pb-2">
          {props.title}
        </h1>
        <div className="flex gap-2 font-semibold text-custom_highlight lg:text-lg xl:text-xl">
          <a
            className="hover:underline underline-offset-8"
            href="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
          >
            Code
          </a>
          {props.siteUrl != null && (
            <a
              className="hover:underline underline-offset-8"
              href="https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template"
            >
              / Site
            </a>
          )}
        </div>
        <p className="pt-2 text-sm text-gray-700 lg:text-base xl:text-lg xl:pt-4">
          {props.synopsis}
        </p>
      </div>
    </motion.div>
  );
}
