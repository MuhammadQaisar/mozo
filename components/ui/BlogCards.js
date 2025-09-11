// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMediaUrl, formatTags } from '../../lib/strapi';

const BlogCard = ({ blog }) => {
  const { title, excerpt, slug, publishedAt, featured_image, author, tags } = blog.attributes;
  
  const imageUrl = featured_image?.data 
    ? getStrapiMediaUrl(featured_image.data.attributes)
    : '/default-blog-image.jpg';

  const formattedTags = formatTags(tags);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Color mapping for tag styling
  const getTagColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      purple: 'bg-purple-100 text-purple-800',
      pink: 'bg-pink-100 text-pink-800',
      gray: 'bg-gray-100 text-gray-800',
    };
    return colorMap[color] || 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title || 'Blog post'}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Tags */}
        {formattedTags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {formattedTags.slice(0, 3).map((tag, index) => (
                <span 
                  key={tag.id || index}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColorClass(tag.color)}`}
                  title={tag.description || tag.name}
                >
                  {tag.name}
                </span>
              ))}
              {formattedTags.length > 3 && (
                <span className="text-gray-500 text-xs">
                  +{formattedTags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>
          <time>{formatDate(publishedAt)}</time>
        </div>
        
        <div className="mt-4">
          <Link 
            href={`/blog/${slug}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;