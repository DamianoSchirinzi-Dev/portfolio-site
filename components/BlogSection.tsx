import { PostBlock } from "@/components/PostBlock";

export default function BlogSection({ posts }: { posts?: any }) {
  return (
    <div id="section-blog" className="flex flex-col items-center px-6 pb-6 bg-custom_light">
      <h1 className="pt-6 font-serif text-5xl text-custom_dark lg:pb-2 lg:text-6xl group">
        My <strong className="text-custom_highlight">Blog</strong>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom_highlight"></span>
      </h1>
      <div className="grid grid-flow-row grid-cols-1 gap-6 my-6 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post: any) => {
          return <PostBlock key={post.slug} post={post} />;
        })}
      </div>

    </div>
  );
}
