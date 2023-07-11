import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "../public/images/Me_Banner.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src={Banner}
          alt="BannerImage"
          className="top-0 left-0 object-cover w-full"
        ></Image>

        <nav className="absolute top-0 flex justify-between w-full px-24 py-8">
          <h1 className="text-6xl">
            <strong>DS</strong>
          </h1>
          <ul className="flex flex-row gap-16 py-5 text-xl">
            <li>
              <a href="www.youtube.com">About</a>
            </li>
            <li>
              <a href="www.youtube.com">Projects</a>
            </li>
            <li>
              <a href="www.youtube.com">Blog</a>
            </li>
            <li>
              <a href="www.youtube.com">Contact</a>
            </li>
          </ul>
        </nav>
        
        <div className="absolute flex flex-col items-end gap-4 top-80 right-52">
          <h1 className="text-5xl">Hi,<div>  </div> I'm <strong className="text-custom_highlight">Damiano Schirinzi</strong></h1>
          <h2 className="text-2xl">I am a software developer.</h2>
          <button className="w-1/3 px-2 py-3 my-2 text-xl text-white rounded-md bg-custom_highlight">See my work</button>
        </div>
      </div>
    </main>
  );
}
