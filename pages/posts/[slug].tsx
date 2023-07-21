import NavigationAlt from "@/components/Navigation_Alternate";
import Footer from "@/components/Footer";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
    <section>
      <NavigationAlt/>
      <div
        className="object-cover relative flex flex-col items-center justify-center w-full min-h-[300px] lg:min-h-screen rounded-md"
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
        <div className="z-20 px-6 pt-24 text-center sm:pt-32 text-custom_light">
          <h1 className="mb-4 font-serif text-2xl md:text-4xl">{post.title}</h1>
          <p className="italic">By Damiano Schirinzi</p>
        </div>
      </div>
      <div
        className="w-full px-12 pt-12 pb-16 text-lg md:w-3/5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <Footer/>
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

export const getSer: GetServerSideProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
  };
};