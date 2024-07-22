export function optimizeImage(src, width, height) {
  // Check if the src is already a data URL
  if (src.startsWith('data:')) {
    return src;
  }

  // Add query parameters for basic optimization
  const optimizedSrc = `${src}?w=${width}&h=${height}&q=75&format=webp`;
  
  // If using a CDN or image optimization service, you would replace the above line with their URL structure
  // For example, with Cloudinary:
  // const optimizedSrc = `https://res.cloudinary.com/your-cloud-name/image/fetch/f_auto,q_auto,w_${width},h_${height}/${src}`;

  return optimizedSrc;
}