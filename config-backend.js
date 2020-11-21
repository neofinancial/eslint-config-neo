module.exports = {
  extends: ['./config-base.js'],
  env: {
    node: true,
    mongo: true,
  },
  rules: {
    'node/no-unpublished-require': 'warn',
  },
};
