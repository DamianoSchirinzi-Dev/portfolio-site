import Link from "next/link";
import Image from "next/image";

import defaultImage from "../public/images/BlogStock.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  let body = post.excerpt.replace(/(<([^>]+)>)/ig, "");
    
  return (
    <div className="p-2 rounded-md post-block">        
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={post.featuredImage.node.sourceUrl ?? defaultImage}
            alt={post.title}
            className="absolute object-cover w-full h-full rounded-md"
            fill={true}
           />
        </div>
      </Link>
      <Link href={`/blog/${post.slug}`} className="my-4 post-content">
        <h3 className="py-4 text-2xl">{post.title}</h3>
        <p className="italic">{body}</p>
      </Link>
    </div>
  );
};