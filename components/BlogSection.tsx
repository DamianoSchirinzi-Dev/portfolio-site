// pages/index.js
import Link from "next/link";
import blogs from "../public/blogs/blogs.json";
import Image from "next/image";
import Me from "../public/images/Me.jpg";

export default function BlogSection() {
  return (
    <div className="h-full bg-custom_dark">
      <div id="section-blogs" className="container flex flex-col items-center px-16 py-24 mx-auto gap-14 ">
        <h1 className="font-serif text-6xl text-enter">
          My <strong className="text-custom_highlight">Blog</strong>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-x-10 md:gap-y-6 lg:gap-y-2">
          {blogs.map((blog) => (
            <div className="w-4/5 px-1 my-1 bg-white rounded-lg md:w-2/3 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href={`/blog/${blog.slug}`}>
                  <Image alt="Placeholder" className="object-cover " src={Me} />
                </a>

                <header className="flex flex-col items-start justify-between px-6 py-8 leading-tight md:py-6">
                  <h1 className="text-sm sm:text-lg md:text-2xl">
                    <a
                      className="text-black no-underline hover:underline"
                      href="#"
                    >
                      {blog.title}
                    </a>
                  </h1>
                  <p className="text-sm text-custom_dark md:text-lg">
                    {blog.Date}
                  </p>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
