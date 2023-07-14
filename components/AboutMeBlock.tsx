import Image from "next/image";

interface AboutMeBlockProps {
  imageSrc: string;
  header: any;
  body: string;
  isTopHeading?: boolean;
  isLastHeading?: boolean;
}

export default function AboutMeBlock(props: AboutMeBlockProps) {
  return (
    <li
      className={`flex flex-col items-center ${
        props.isLastHeading ? "pt-16" : "py-16"
      } gap-10 text-center md:flex-row md:justify-center md:items-start md:gap-20 md:py-20`}
    >
      <div className="flex gap-x-4">
        <div className="flex-auto min-w-0">
          <h1
            className={`font-serif hover:animate-pulse ${
              props.isTopHeading ? "text-5xl" : "text-4xl"
            } text-4xl font-light text-gray-900  ${
              props.isTopHeading ? "md:text-7xl md:pr-4" : "md:text-5xl"
            } `}
          >
            {props.header}
          </h1>
        </div>
      </div>
      <div className="w-2/3 md:w-1/3 md:text-start">
        <p className="text-sm leading-6 text-gray-900 md:text-lg">{props.body}</p>
      </div>
    </li>
  );
}
