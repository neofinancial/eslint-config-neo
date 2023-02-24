module.exports = {
  extends: ['./config-base-next.js', './config-backend.js'],
  env: {
    node: true,
    mongo: true,
  },
  overrides: [
    {
      files: ['**/repositories/**/*', '**/models/**/*', '**/migrations/**/*', '**/scripts/**/*'],
      rules: {
        'unicorn/no-null': 'off',
      },
    },
  ],
};
