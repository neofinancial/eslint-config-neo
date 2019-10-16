module.exports = {
  extends: ['./index.js'],
  env: {
    node: true,
    mongo: true
  },
  rules: {
    'node/no-unpublished-require': 'warn'
  }
};
