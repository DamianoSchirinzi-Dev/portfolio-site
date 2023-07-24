import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";
import { GetStaticProps } from "next";
import { getPosts } from "@/lib/service";

export default function Home({ posts }: { posts: any }) {
  return (
    <main className="w-full mx-0 tracking-wide text-gray-200 bg-custom_dark font-extralight font-montserrat">
      <Navigation />
      <HeroBanner />
      <AboutSection />     
      <ProjectsSection />
      <BlogSection posts={posts}/>
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(10); // retrieve first 100 posts
  console.log("Length : " + posts.length);
  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};
