import Image from "next/image";
import Arrow from "../public/images/arrow.svg";
import PillButton from "./PillButton";
import { motion } from "framer-motion";

export default function IntroWithCta() {
  return (
    <motion.div
      initial={{ x: "-100vw"}}
      animate={{ x: 0}}
      transition={{ type: "spring", duration: 2.5}}
      className="flex flex-col items-center w-4/6 gap-5 pt-12 text-center md:items-start md:text-left md:w-1/3"
    >
      <h2 className="text-4xl xl:text-5xl">
        <strong className="text-custom_highlight">Hello</strong>, i'm{" "}
      </h2>
      <h1 className="font-serif text-5xl xl:text-6xl">Damiano Schirinzi</h1>
      <h2 className="pt-4 text-xl xl:text-2xl">
        I am a
        <strong className="text-custom_highlight"> Software developer </strong>
        with a passion for all things digitial and creative.
      </h2>
      <div className="relative flex justify-center w-90">
        <PillButton
          label="See my work"
          action={() => console.log("Callback!")}
        />
        <Image
          src={Arrow}
          alt=""
          className="absolute bottom-0 object-cover w-32 -right-24 lg:rotate-45 lg:-bottom-20 lg:-right-48 lg:w-52 xl:rotate-12 xl:-bottom-8 xl:-right-42"
        />
      </div>
    </motion.div>
  );
}
