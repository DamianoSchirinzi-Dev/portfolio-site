import { motion } from "framer-motion";
import Image from "next/image";
import GitHubLogo from "../public/images/github.png";
import LinkedInLogo from "../public/images/linkedin.png";
import PillButton from "./PillButton";

export default function Footer() {
  return (
    <div id="section-contact" className=" bg-custom_dark text-custom_light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 100,
          transition: { duration: 2.5 },
        }}
        className="flex flex-col items-center justify-center gap-8 py-24 text-center lg:flex-row lg:items-start lg:justify-center lg:gap-28"
      >
        <h1 className="font-serif text-4xl font-light md:text-6xl">
          Get in Touch
        </h1>
        <div className="flex flex-col items-center w-4/6 gap-6 lg:text-left lg:items-start lg:w-1/3 lg:gap-8">
          <p className="text-sm leading-6 md:text-lg md:w-5/6">
            Whether you're interested in partnering on a project or simply want
            to drop a friendly message, I'm all ears! Click the button below to
            get in touch.
          </p>

          <div className="flex flex-row justify-center gap-8">
            <a href="https://github.com/DamianoSchirinzi-Dev">
              <Image src={GitHubLogo} alt="Github Logo" />
            </a>
            <a href="https://www.linkedin.com/in/damiano-schirinzi-b60a53210/">
              <Image src={LinkedInLogo} alt="LinkedIn Logo" />
            </a>
          </div>

          <PillButton
            label="Say hello"
            isInFooter={true}
            redirectUrl="projects"
          />
        </div>
      </motion.div>
    </div>
  );
}
