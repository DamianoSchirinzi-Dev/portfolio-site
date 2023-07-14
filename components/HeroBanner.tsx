import Image from "next/image";
import Vector from "../public/images/Vector.png";
import Banner from "../public/images/Me_B&W.png";
import IntroWithCta from "@/components/IntroWithCta";

export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center pt-12 pb-20 overflow-hidden md:h-screen md:pt-0 md:flex-row md:justify-evenly">
      <Image
        src={Banner}
        alt="BannerImage"
        className="z-10 object-cover w-2/3 rounded-2xl md:object-contain md:w-1/3"
      ></Image>
      <IntroWithCta />
    </div>
  );
}
