/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/orcamento',
        destination: '/atendimento',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
