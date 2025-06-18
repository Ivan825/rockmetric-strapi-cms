// config/middlewares.ts

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',

  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',        // your Next.js dev URL
        'https://rockmetricdes-2.netlify.app', // your GitHub Pages URL
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: ['*'],
      credentials: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
