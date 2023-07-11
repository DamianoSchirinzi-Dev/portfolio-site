import Image from "next/image";
import GitHubLogo from "../public/images/github.png";
import LinkedInLogo from "../public/images/linkedin.png";

export default function Footer() {
  return (
    <div id="section-contact"className="flex flex-col items-center w-full gap-8 py-28 bg-custom_light">
      <h1 className="text-5xl text-custom_highlight">Get in Touch!</h1>
      <p className="w-2/5 text-xl text-center">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <div className="flex flex-row gap-12">
        <a href="https://github.com/DamianoSchirinzi-Dev">
          <Image src={GitHubLogo} alt="Github Logo" />
        </a>
        <a href="https://www.linkedin.com/in/damiano-schirinzi-b60a53210/">
          <Image src={LinkedInLogo} alt="LinkedIn Logo" />
        </a>        
      </div>

      <button className="px-8 py-4 my-2 mt-4 text-xl text-white rounded-md bg-custom_highlight">
          Say Hello
        </button>
    </div>
  );
}
