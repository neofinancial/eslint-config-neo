module.exports = {
  extends: ['./config-base-next.js'],
  env: {
    node: true,
    mongo: true,
  },
  rules: {
    'node/no-unpublished-require': 'warn',
  },
};
