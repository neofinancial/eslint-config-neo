module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:lodash/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'unicorn', 'promise', 'lodash', 'no-loops'],
  env: {
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'func-names': ['warn', 'as-needed'],
    'no-bitwise': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-concat': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'require-await': 'warn',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+' }],

    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'lodash/prefer-constant': 'off',
    'lodash/prefer-lodash-method': 'off',

    'no-loops/no-loops': 'warn'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
