import Image from "next/image";
import GitHubLogo from "../public/images/github.png";
import LinkedInLogo from "../public/images/linkedin.png";
import PillButton from "./PillButton";

export default function Footer() {
  return (
    <div
      id="section-contact"
      className="flex flex-col items-center justify-center gap-10 py-24 text-center bg-custom_dark lg:flex-row lg:items-start lg:justify-center lg:gap-28"
    >
      <h1 className="font-serif text-4xl font-light md:text-6xl">
        Get in Touch
      </h1>
      <div className="flex flex-col items-center w-4/6 gap-10 lg:text-left lg:items-start lg:w-1/3">
        <p className="text-sm leading-6 md:text-lg md:w-5/6">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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
          action={() => console.log("Callback!")}
        />
      </div>
    </div>
  );
}
