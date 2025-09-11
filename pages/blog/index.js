import { useState, useEffect } from 'react';
import { strapiAPI } from '../../lib/strapi';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await strapiAPI.getBlogPosts();
      console.log('Blog posts response:', response); // Debug log
      setPosts(response.data || []);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchPosts}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-2">Discover our latest articles and insights</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found.</p>
            <p className="text-gray-500 mt-2">Check back later for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Featured Image */}
                {post.attributes.featuredImage?.data && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.featuredImage.data.attributes.url}`}
                      alt={post.attributes.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    <Link 
                      href={`/blogs/${post.attributes.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.attributes.title}
                    </Link>
                  </h2>
                  
                  {post.attributes.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.attributes.excerpt}
                    </p>
                  )}
                  
                  {/* Tags */}
                  {post.attributes.tags && post.attributes.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.attributes.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Meta */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-medium">{post.attributes.author}</span>
                    <span>
                      {new Date(post.attributes.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  {/* Read More */}
                  <div className="mt-4">
                    <Link 
                      href={`/blogs/${post.attributes.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}