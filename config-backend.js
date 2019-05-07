module.exports = {
  extends: ['eslint-config-neo'],
  env: {
    node: true,
    jest: true,
    mongo: true
  },
  rules: {
    'node/no-unpublished-require': 'warn'
  }
};
