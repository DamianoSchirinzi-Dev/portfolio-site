import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
    <section className="container py-12 mx-auto">
      <div
        className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute z-10 w-full h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        ></div>
        <div className="z-20 text-center">
          <h1 className="mb-4 text-2xl md:text-4xl">{post.title}</h1>
          <p className="italic">By Jeffrey</p>
        </div>
      </div>
      <div
        className="w-full py-6 mx-auto mt-20 text-lg post-content md:w-3/5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
    revalidate: 10,
  };
};