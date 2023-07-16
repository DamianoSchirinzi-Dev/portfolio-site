import { motion } from "framer-motion";
import { AboutMeBlockProps } from "../types/Types";

export default function AboutMeBlock(props: AboutMeBlockProps) {
  return (
    <motion.li
      initial={{ opacity: 0}}
      whileInView={{
        opacity: 100, transition: { duration: 2.5} 
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      className={`flex flex-col items-center ${
        props.isLastHeading ? "pt-16" : "py-16"
      } gap-10 text-center md:flex-row md:justify-center md:items-start md:gap-20 md:py-20`}
    >
      <div className="flex gap-x-4">
        <div>
          <h1
            className={`font-serif ${
              props.isTopHeading ? "text-5xl" : "text-4xl"
            } text-4xl font-light text-gray-900  ${
              props.isTopHeading ? "md:text-7xl md:pr-4" : "md:text-5xl"
            } `}
          >
            {props.header}
          </h1>
        </div>
      </div>
      <div className="w-2/3 md:w-1/3 md:text-start">
        <p className="text-sm text-gray-900 md:text-lg">{props.body}</p>
      </div>
    </motion.li>
  );
}
