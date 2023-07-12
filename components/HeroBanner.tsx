import Image from "next/image";
import Banner from "../public/images/Me_B&W.png";
import IntroWithCta from "@/components/IntroWithCta";

export default function HeroBanner() {
  return (
    <div className="flex flex-row items-start justify-between h-screen pt-12 bg-custom_dark">
      <Image
        src={Banner}
        alt="BannerImage"
        className="w-1/3 ml-40 rounded-2xl center"
      ></Image>
      <IntroWithCta/>
    </div>
  );
}
