/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',          // qualquer rota começando com /api/
        destination: 'http://localhost:3390/api/:path*', // redireciona para seu backend
      },
    ];
  },
};

export default nextConfig;
