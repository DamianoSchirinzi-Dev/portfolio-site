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
      className="w-full px-2 py-6 bg-white rounded-lg shadow-xl md:w-96 text-custom_dark lg:py-10"
    >
      <div className="relative flex flex-col pr-10 pl-14">
        <h1 className="absolute text-2xl -top-0 left-2">{props.icon}</h1>
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
