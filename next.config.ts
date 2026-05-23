// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abstd.ru",
        // port: '', // если нужен конкретный порт
        // pathname: '/static/img/data/**', // ограничение по пути
      },
      // Можно добавить несколько доменов
      {
        protocol: "https",
        hostname: "ir.ozone.ru",
      },
    ],
  },
};

module.exports = nextConfig;
