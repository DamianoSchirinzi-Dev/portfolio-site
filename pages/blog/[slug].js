// pages/blog/[slug].js
import { useRouter } from "next/router";
import blogs from "../../public/blogs/blogs.json";
import Navigation_Alternate from "../../components/Navigation_Alternate";
import Footer from "../../components/Footer";

const BlogPage = ({ blog }) => {
  const router = useRouter();

  // Handle case when the page is still loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-gray-200">
      <Navigation_Alternate />
      <div className="flex flex-col items-center h-full gap-8 pt-10 pb-20 text-center px-14 text-custom_dark bg-custom_light md:pt-20 md:gap-12 ">
        <h1 className="font-serif text-5xl md:text-6xl">{blog.title}</h1>
        <p className="text-sm leading-6 sm:w-3/4 md:text-lg md:w-2/3 md:leading-8">
          {blog.content}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: true, // Generate fallback pages on the fly for uncached paths
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blog = blogs.find((blog) => blog.slug === slug);

  return {
    props: {
      blog,
    },
  };
}

export default BlogPage;
