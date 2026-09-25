export function cloudinaryImage(publicId: string, width = 1200) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/image/upload/ar_4:3,c_fill,g_auto,w_${width},q_auto,f_auto/${publicId}`;
}
