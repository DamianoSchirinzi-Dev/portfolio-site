// pages/index.js
import blogs from "../public/blogs/blogs.json";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <div className="h-full bg-custom_light">
      <div
        id="section-blog"
        className="container flex flex-col items-center px-16 py-24 mx-auto gap-14 "
      >
        <h1 className="font-serif text-6xl text-custom_dark">
          My <strong className="text-custom_highlight">Blog</strong>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-x-10 md:gap-y-6 lg:gap-y-2">
          {blogs.map((blog) => (
            <BlogCard
              slug={blog.slug}
              title={blog.title}
              synopsis={blog.synopsis}
              content={blog.content}
              date={blog.Date}
              imagePath={blog.imagePath}
              tags={blog.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
