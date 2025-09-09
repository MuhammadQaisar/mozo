import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown'; // For rendering rich text content

// Install react-markdown: npm install react-markdown
// Define your Strapi API URL
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

const BlogPostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading blog post...</div>;
  }

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{post.attributes.title} | Mozo Technologies Blog</title>
        <meta name="description" content={post.attributes.content.substring(0, 150)} />
      </Head>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.attributes.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
          Published on {new Date(post.attributes.publishedDate).toLocaleDateString()} by {post.attributes.author}
        </p>
        {post.attributes.coverImage.data && (
          <img
            src={`${STRAPI_API_URL.replace('/api', '')}${post.attributes.coverImage.data.attributes.url}`}
            alt={post.attributes.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const response = await axios.get(`${STRAPI_API_URL}/blog-posts`);
    const posts = response.data.data;

    const paths = posts.map((post) => ({
      params: { slug: post.attributes.slug },
    }));

    return {
      paths,
      fallback: true, // Set to 'true' to enable Incremental Static Regeneration (ISR)
    };
  } catch (error) {
    console.error('Error fetching blog post paths:', error.message);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await axios.get(`${STRAPI_API_URL}/blog-posts?filters[slug][$eq]=${params.slug}&populate=*`);
    const post = response.data.data[0] || null; // Get the first matching post

    return {
      props: {
        post,
      },
      revalidate: 60, // Re-generate page every 60 seconds (ISR)
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${params.slug}:`, error.message);
    return {
      props: {
        post: null,
      },
      revalidate: 60,
    };
  }
}

export default BlogPostPage;
