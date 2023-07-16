import Image from "next/image";
import Banner from "../public/images/Me_B&W.png";
import IntroWithCta from "@/components/IntroWithCta";
import Vector from "../public/images/Vector.png";

export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center pt-12 pb-20 overflow-hidden md:h-screen md:pt-0 md:flex-row md:justify-evenly">
      <Image
        src={Banner}
        alt="BannerImage"
        className="object-cover w-4/5 rounded-2xl sm:w-3/5 md:object-contain md:w-1/3"
      ></Image>
      <IntroWithCta />
    </div>
  );
}
