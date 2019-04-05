module.exports = {
  extends: ['eslint-config-neo', 'plugin:node/recommended'],
  plugins: ['node'],
  env: {
    node: true,
    mongo: true
  },
  rules: {
    'no-process-exit': 'off',

    'unicorn/no-process-exit': 'off',

    'node/exports-style': 'error',
    'node/no-unpublished-require': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules']
      }
    ]
  }
};
