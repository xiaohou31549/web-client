/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self'; 
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com https://*.clarity.ms https://fomo.codedthemes.com;
    style-src 'self' 'unsafe-inline' https://fomo.codedthemes.com https://fonts.googleapis.com;
    img-src 'self' blob: data: https://www.googletagmanager.com https://flagcdn.com https://*.openstreetmap.org https://*.clarity.ms https://*.bing.com https://fomo.codedthemes.com;
    font-src 'self' https://*.gstatic.com;
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    media-src 'self' https://*.cloudfront.net;
    connect-src 'self' https://www.googletagmanager.com https://raw.githubusercontent.com https://fomo.codedthemes.com https://*.clarity.ms https://*.azurewebsites.net;
`;

const nextConfig = {
  modularizeImports: {
    // 目的：减少打包体积，提升 tree-shaking 效果
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        // 限制网页可以加载的资源来源，提高安全性，防止 XSS 等攻击
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  }
};

export default nextConfig;
