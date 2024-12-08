import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'www.modora.co.uk'
      },
      {
        protocol: 'https',
        hostname: 'stylestryproductionwls47sou4z.cdn.e2enetworks.net'
      },
      {
        protocol: 'https',
        hostname: 'image.made-in-china.com'
      },
      {
        protocol: 'https',
        hostname: 'ae-pic-a1.aliexpress-media.com'
      },
      {
        protocol: 'https',
        hostname: 'img4.dhresource.com'
      }
  ]
  }
};


export default nextConfig;
