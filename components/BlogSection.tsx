// pages/index.js
import Link from "next/link";
import blogs from "../public/blogs/blogs.json";
import Image from "next/image";
import Me from "../public/images/Me.jpg";

export default function BlogSection() {
  return (
    <div className="h-full bg-custom_dark">
      <div
        id="section-blogs"
        className="container px-16 py-24 mx-auto md:px-12 "
      >
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-x-10 md:gap-y-6 lg:gap-y-2">
          {blogs.map((blog) => (
            <div className="w-4/5 px-1 my-1 bg-white rounded-lg md:w-2/3 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href={`/blog/${blog.slug}`}>
                  <Image
                    alt="Placeholder"
                    className="block w-full h-auto"
                    src={Me}
                    width={100}
                    height={200}
                  />
                </a>

                <header className="flex items-center justify-between px-6 py-4 leading-tight md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="text-black no-underline hover:underline"
                      href="#"
                    >
                      {blog.title}
                    </a>
                  </h1>
                  <p className="text-sm text-custom_dark">{blog.Date}</p>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
