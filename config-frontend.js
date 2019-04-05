module.exports = {
  extends: ['eslint-config-neo', 'plugin:node/recommended', 'plugin:react/recommended'],
  plugins: ['node', 'react'],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-process-exit': 'off',

    'unicorn/no-process-exit': 'off',

    'node/exports-style': 'error',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules']
      }
    ],

    'react/prop-types': 'off'
  }
};
