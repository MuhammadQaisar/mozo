// pages/blog/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, getBlogBySlug, getStrapiMediaUrl } from '../../lib/strapi';

export default function BlogPost({ blog }) {
  const router = useRouter();

  // If the page is not yet generated, display a loading state
  if (router.isFallback) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  const { title, content, publishedAt, featured_image, author, excerpt, tags } = blog.attributes;
  
  const imageUrl = featured_image?.data 
    ? getStrapiMediaUrl(featured_image.data.attributes)
    : '/default-blog-image.jpg';

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>{title} - Mozo Technologies</title>
        <meta name="description" content={excerpt || title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt || title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="container mx-auto px-4 py-8">
        {/* Back to blog link */}
        <div className="mb-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to blog
          </Link>
        </div>

        {/* Hero section */}
        <header className="mb-8">
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {title}
            </h1>

            <div className="flex items-center justify-between text-gray-600 mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span>By {author}</span>
                <span>•</span>
                <time>{formatDate(publishedAt)}</time>
              </div>
              
              {formattedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formattedTags.map((tag, index) => (
                    <span 
                      key={tag.id || index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColorClass(tag.color)}`}
                      title={tag.description || tag.name}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic border-l-4 border-blue-500 pl-6">
                {excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read More Posts
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}

// Generate paths for all blog posts
export async function getStaticPaths() {
  try {
    const blogs = await getBlogs();
    
    const paths = blogs.map((blog) => ({
      params: { slug: blog.attributes.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // Enable ISR for new posts
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

// Fetch blog data for each page
export async function getStaticProps({ params }) {
  try {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}