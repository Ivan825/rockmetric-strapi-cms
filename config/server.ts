// cms/config/server.js

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // read APP_KEYS from the environment, comma-separated
    keys: env.array('APP_KEYS', [
      'fallbackKey1',
      'fallbackKey2',
      'fallbackKey3',
      'fallbackKey4',
    ]),
  },
});
