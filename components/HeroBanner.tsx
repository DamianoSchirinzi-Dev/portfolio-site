import Image from "next/image";
import Banner from "../public/images/Me_Banner.png";
import IntroWithCta from "@/components/IntroWithCta";

export default function HeroBanner() {
  return (
    <div className="flex flex-col items-end justify-center">
      <Image
        src={Banner}
        alt="BannerImage"
        className="top-0 left-0 object-cover w-full"
      ></Image>
      <IntroWithCta/>
    </div>
  );
}
