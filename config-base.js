module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:security/recommended-legacy',
  ],
  plugins: ['node', 'jest', 'unicorn', 'promise', 'import', 'autofix'],
  parserOptions: {
    ecmaVersion: 2025,
    sourceType: 'module',
    project: true,
  },
  env: {
    es6: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: 'module',
        project: true,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      /**
       * Global overrides.
       * if adding a typescript-eslint version of an existing ESLint rule,
       * make sure to disable the ESLint rule here
       */
      rules: {
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/291
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/477
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'no-array-constructor': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',

        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/return-await': ['warn', 'always'],
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'warn',

        //TODO: change to { assertionStyle: 'never' } when config-dug supports primitive types
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+', varsIgnorePattern: '^_+' }],
        'autofix/no-unused-vars': ['error', { argsIgnorePattern: '^_+', varsIgnorePattern: '^_+' }],
        '@typescript-eslint/no-use-before-define': ['error', { typedefs: false, enums: false }],
      },
    },
    /**
     * Test overrides.
     */
    {
      files: ['**/test/**/*'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/require-await': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
  ],
  rules: {
    // OFF
    'no-process-exit': 'off',
    'jest/prefer-to-be': 'off',
    'no-default-export': 'off',
    // use @typescript-eslint/no-restricted-imports instead
    'no-restricted-imports': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    // this rule requires a TypeScript lib target of es2019 or later
    'unicorn/prefer-trim-start-end': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',

    // WARN
    'no-bitwise': 'warn',
    'no-console': 'warn',
    'no-lonely-if': 'warn',
    'prefer-const': 'warn',
    'no-extra-bind': 'warn',
    'prefer-template': 'warn',
    'no-useless-concat': 'warn',
    'no-unneeded-ternary': 'warn',
    'func-names': ['warn', 'as-needed'],
    'no-var': 'warn',
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        terms: ['todo'],
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules'],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['sibling', 'parent'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': 'warn',
    'autofix/sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-reduce': 'warn',

    'security/detect-object-injection': 'warn',

    // ERROR
    curly: 'error',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-new-require': 'error',
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    eqeqeq: ['error', 'smart'],
    'no-mixed-requires': 'error',
    'no-param-reassign': 'error',
    'no-duplicate-imports': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'node/exports-style': 'error',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [{ target: './src', from: './test', message: 'Test code - Cannot import from test in the src code' }],
      },
    ],
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*', '**/webpack.*.js'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
