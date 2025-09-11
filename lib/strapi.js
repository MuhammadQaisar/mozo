// lib/strapi.js
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Fetch all blogs
export async function getBlogs() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Fetch single blog by slug
export async function getBlogBySlug(slug) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Fetch single blog by ID
export async function getBlogById(id) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs/${id}?populate=*`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Helper function to get media URL
export function getStrapiMediaUrl(media) {
  if (!media) return null;
  
  if (media.url.startsWith('http')) {
    return media.url;
  }
  
  return `${STRAPI_URL}${media.url}`;
}