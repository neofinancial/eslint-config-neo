module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  plugins: ['node', 'jest', 'unicorn', 'promise', 'import'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    'jest/globals': true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true
      },
      // if adding a typescript-eslint version of an existing ESLint rule make sure to disable the ESLint rule here
      rules: {
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/291
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/477
        'no-undef': 'off',
        'no-array-constructor': 'off',

        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+' }],
        // enable this once typescript-eslint 2.9.0 is released
        // '@typescript-eslint/prefer-optional-chain': 'warn'

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
      }
    },
    {
      files: ['**/test/**/*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ],
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
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    // disable atomic updates rule until this issue is resolved: https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'require-await': 'off',

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
        groups: [
          ['builtin', 'external'],
          ['sibling', 'parent']
        ],
        'newlines-between': 'always-and-inside-groups'
      }
    ],
    'import/newline-after-import': 'warn'
  }
};
