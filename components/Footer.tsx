import Image from "next/image";
import GitHubLogo from "../public/images/github.png";
import LinkedInLogo from "../public/images/linkedin.png";

export default function Footer() {
  return (
    <div
      id="section-contact"
      className="flex flex-row items-start justify-center gap-20 py-20 bg-custom_dark"
    >
      <h1 className="font-serif text-6xl font-light">Get in Touch</h1>
      <div className="flex flex-col w-2/6 gap-6 mr-10">
        <p className="">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <div className="flex flex-row justify-start gap-8">
          <a href="https://github.com/DamianoSchirinzi-Dev">
            <Image src={GitHubLogo} alt="Github Logo" />
          </a>
          <a href="https://www.linkedin.com/in/damiano-schirinzi-b60a53210/">
            <Image src={LinkedInLogo} alt="LinkedIn Logo" />
          </a>
        </div>

        <button className="w-40 py-3 mt-2 text-xl font-bold text-white rounded-full bg-custom_highlight">
          Say Hello
        </button>
      </div>
    </div>
  );
}
