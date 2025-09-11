import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios'; // Import axios

// Define your Strapi API URL (adjust if your Strapi is not on localhost:1337)
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

const BlogsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs | Mozo Technologies</title>
        <meta name="description" content="Read the latest blog posts from Mozo Technologies." />
      </Head>
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center mt-20">
        <h1 className="text-5xl font-extrabold mb-4">Our Blog</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Stay updated with our insights and news.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-6 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.attributes.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(post.attributes.publishedDate).toLocaleDateString()} by {post.attributes.author}
              </p>
              {post.attributes.coverImage.data && (
                <img
                  src={`${STRAPI_API_URL.replace('/api', '')}${post.attributes.coverImage.data.attributes.url}`}
                  alt={post.attributes.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-gray-700 mb-4">
                {post.attributes.content.substring(0, 150)}... {/* Display a snippet */}
              </p>
              <Link href={`/blogs/${post.attributes.slug}`} className="text-[#F06A6A] hover:underline">
                Read More
              </Link>
            </div>
          ))}
          {posts.length === 0 && (
            <p className="text-center text-gray-600 col-span-full">No blog posts found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(`${STRAPI_API_URL}/blog-posts?populate=*`);
    const posts = response.data.data; // Strapi returns data in a 'data' array
    return {
      props: {
        posts,
      },
      revalidate: 60, // Re-generate page every 60 seconds (ISR)
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error.message);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
}

export default BlogsPage;