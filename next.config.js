/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ['cdn.discordapp.com'],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"**",
      },
      {
        protocol:"https",
        hostname:"cdn.discordapp.com",
      }
    ]
    
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}


/** below all code is corrupt  */


// module.exports = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       /^(https?:)?\/\/cdn\.discordapp\.com\/.*/,
//     ],
//   },
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// };




// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['cdn.discordapp.com'],
//     loader: 'default',
//     path: 'https://cdn.discordapp.com/', // This is optional, replace with your image path
//     // path: 'https://cdn.discordapp.com/attachments/929834261568167986/942042447922495528/JancyJoseph.webp&w=640&q=75', // This is optional, replace with your image path
//   },
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// };
