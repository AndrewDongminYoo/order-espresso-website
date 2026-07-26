import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smallest) then WebP for on-the-fly optimized delivery.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
