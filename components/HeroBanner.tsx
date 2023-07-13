import Image from "next/image";
import Banner from "../public/images/Me_B&W.png";
import IntroWithCta from "@/components/IntroWithCta";

export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center pt-12 pb-24 md:flex-row md:justify-evenly md:pt-0">
      <Image
        src={Banner}
        alt="BannerImage"
        className="object-cover w-1/2 rounded-2xl md:object-contain md:w-1/3"
      ></Image>
      <IntroWithCta/>
    </div>
  );
}
