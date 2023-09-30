const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'conquestdb.com',
        defaultLocale: 'en',
        http: process.env.NODE_ENV === 'development',
      },
      {
        domain: process.env.NODE_ENV === 'development' ? 'de.localhost' : 'de.conquestdb.com',
        defaultLocale: 'de',
        http: process.env.NODE_ENV === 'development',
      },
      {
        domain: process.env.NODE_ENV === 'development' ? 'fr.localhost' : 'fr.conquestdb.com',
        defaultLocale: 'fr',
        http: process.env.NODE_ENV === 'development',
      },
      {
        domain: process.env.NODE_ENV === 'development' ? 'it.localhost' : 'it.conquestdb.com',
        defaultLocale: 'it',
        http: process.env.NODE_ENV === 'development',
      },
      {
        domain: process.env.NODE_ENV === 'development' ? 'pseudo.localhost' : 'pseudo.conquestdb.com',
        defaultLocale: 'pseudo',
        http: process.env.NODE_ENV === 'development',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader',
      options: {
        limit: '100000'
      }
    });
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // for lingui
    };
    return config;
  },
}

module.exports = nextConfig
