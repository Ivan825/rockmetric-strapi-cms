export default ({ env }) => ({
  // other plugin configs…

  'users-permissions': {
    config: {
      // read your secret from the environment
      jwtSecret: env('JWT_SECRET'),
    },
  },
});