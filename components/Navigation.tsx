import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Vector from "../public/images/Vector.svg";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollTo = (ID: string) => {
    console.log("Clicked!");
    var elementToScrollTo = document.getElementById(`section-${ID}`);
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({ behavior: "smooth" });
    }

    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-between px-10 pt-12 pb-4 text-lg md:pr-20 md:pl-16 md:pb-0 bg-custom_dark">
      <div>     
        <motion.div 
        initial={{
          opacity: 0
        }}
        animate={{
          opacity:100
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}>

          <Image src={Vector} alt="" className="absolute left-0 object-cover w-72 top-32 sm:w-96 xl:w-1/3 xl:-rotate-45 xl:left-36 xl:top-20"/>
          </motion.div>
        <a href="/">
          <h1 className="z-10 font-serif text-5xl sm:text-7xl">
            DS<strong className="text-xl text-custom_highlight">.dev</strong>
          </h1>
        </a>
      </div>

      <nav>
        <section className="flex MOBILE-MENU md:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
            <div
              className="absolute top-0 right-0 pt-12 px-9 sm:pt-16"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-10 h-10 text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-gray-200">
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("about")}>ABOUT</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("projects")}>PROJECTS</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("blog")}>BLOG</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("contact")}>CONTACT</button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden text-xl DESKTOP-MENU space-x-14 md:flex md:text-2xl md:space-x-18 lg:text-4xl lg:space-x-24">
          <li>
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollTo("blog")}>Blog</button>
          </li>{" "}
          <li>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
