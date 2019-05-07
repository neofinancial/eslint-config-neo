module.exports = {
  extends: ['eslint-config-neo', 'plugin:node/recommended', 'plugin:react/recommended'],
  plugins: ['node', 'react', 'react-hooks'],
  env: {
    browser: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'node/no-unpublished-require': 'off',

    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
