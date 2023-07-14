import Image from "next/image";
import Arrow from "../public/images/arrow.png";

export default function IntroWithCta() {
  return (
    <div className="flex flex-col items-center w-4/6 gap-5 pt-12 text-center md:items-start md:text-left md:w-1/3">
      <h2 className="text-3xl">Hello, i'm </h2>
      <h1 className="font-serif text-5xl font-light">Damiano Schirinzi</h1>
      <h2 className="pt-4 text-xl">
        I am a
        <strong className="text-custom_highlight"> Software developer </strong>
        with a passion for all things digitial and creative.
      </h2>
      <div className="flex justify-center w-full">
        <button className="px-5 py-3 text-xl font-bold text-center text-white rounded-full w-52 mt-7 bg-custom_highlight">
          See my work
        </button>
      </div>
    </div>
  );
}
