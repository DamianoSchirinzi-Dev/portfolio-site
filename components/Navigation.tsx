import Image from "next/image";
import { useState } from "react";
import Github from "../public/images/github.png";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollTo = (ID: string) => {
    var elementToScrollTo = document.getElementById(`section-${ID}`);
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({ behavior: "smooth" });
    }

    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-10 pt-12 pb-4 text-lg font-poppins text-custom_text_black md:pr-20 md:pl-16">
      <a href="/">
       <h1 className="font-serif text-6xl">DS</h1>
      </a>
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
              className="absolute top-0 right-0 pt-8 px-9"
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
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-gray-300">
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("about")}>ABOUT</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("about")}>PROJECTS</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("about")}>BLOG</button>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <button onClick={() => scrollTo("contact")}>CONTACT</button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden text-xl DESKTOP-MENU space-x-14 md:flex">
          <li>
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo("about")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollTo("about")}>Blog</button>
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
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
