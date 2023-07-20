import { PostBlock } from "@/components/PostBlock";

export default function BlogSection({posts}: {posts?:any}) {
  return (
    <div className="container py-8 mx-auto">
    <h3 className="text-xl">All my posts ({posts.length})</h3>
    <div className="grid grid-flow-row grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post: any) => {
        return <PostBlock key={post.slug} post={post} />;
      })}
    </div>
  </div>
  );
}

