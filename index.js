module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:unicorn/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'node', 'jest', 'unicorn', 'promise', 'import'],
  env: {
    es6: true,
    'jest/globals': true
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
    'no-process-exit': 'off',
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-concat': 'warn',
    'no-var': 'warn',
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    // disable atomic updates rule until this issue is resolved: https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'require-await': 'off',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+' }],
    '@typescript-eslint/explicit-function-return-type': 'error',

    // disabled for performance reasons for now, rules that require type information are very slow
    // '@typescript-eslint/promise-function-async': [
    //   "error",
    //   {
    //     "checkArrowFunctions": true,
    //     "checkFunctionDeclarations": true,
    //     "checkFunctionExpressions": true,
    //     "checkMethodDeclarations": true
    //   }
    // ],

    'node/exports-style': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules']
      }
    ],

    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-process-exit': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'import/no-restricted-paths': ['error', { zones: [{ target: './src', from: './test' }] }],
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*', '**/webpack.*.js'],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], ['sibling', 'parent']],
        'newlines-between': 'always-and-inside-groups'
      }
    ],
    'import/newline-after-import': ['warn']
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['**/test/**/*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
