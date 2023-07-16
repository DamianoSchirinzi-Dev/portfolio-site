import Image from "next/image";
import {BlogCardProps} from "../types/Types"

export default function BlogCard(props: BlogCardProps) {
  return (
    <a
      className="flex flex-col gap-8 overflow-hidden bg-white rounded shadow-lg w-6/7 sm:w-3/4 lg:w-1/4 hover:animate-pulse text-custom_dark"
      href={`/blog/${props.slug}`}
    >
      <Image
        className="w-full"
        src={`/../public/images/${props.imagePath}`}
        width={200}
        height={200}
        alt="card-image"
      />
      <div className="flex flex-col gap-2 px-6 pb-2 sm:pb-0 lg:pb-10 xl:pb-0">
        <h1 className="mb-2 text-lg font-bold sm:text-xl lg:text-2xl">
          {props.title}
        </h1>
        <p className="h-10 text-sm text-gray-700 text-ellipsis lg:text-base">
          {props.synopsis}
        </p>
      </div>
      <div className="px-6 pb-2 sm:pt-1">
        {props.tags.map((tag) => (
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full ">
            #{tag}
          </span>
        ))}
      </div>
    </a>
  );
}
