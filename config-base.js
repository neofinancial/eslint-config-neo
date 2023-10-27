module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: ['node', 'jest', 'unicorn', 'promise', 'import'],
  parserOptions: {
    ecmaVersion: 2021,
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
        ecmaVersion: 2021,
        sourceType: 'module',
        project: true,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      // if adding a typescript-eslint version of an existing ESLint rule make sure to disable the ESLint rule here
      rules: {
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/291
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this: https://github.com/typescript-eslint/typescript-eslint/issues/477
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'no-array-constructor': 'off',

        //TODO: change to { assertionStyle: 'never' } when config-dug supports primitive types
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+', varsIgnorePattern: '^_+' }],
        '@typescript-eslint/no-use-before-define': ['error', { typedefs: false, enums: false }],
        '@typescript-eslint/prefer-optional-chain': 'warn',
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
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
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'func-names': ['warn', 'as-needed'],
    'jest/prefer-to-be': 'off',
    'no-bitwise': 'warn',
    'no-console': 'warn',
    'no-default-export': 'off',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-param-reassign': 'error',
    'no-process-exit': 'off',
    'no-restricted-imports': 'off', // use @typescript-eslint/no-restricted-imports instead
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
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    // disable atomic updates rule until this issue is resolved: https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'require-await': 'off', // use @typescript-eslint/no-floating-promises instead

    'node/exports-style': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules'],
      },
    ],

    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        terms: ['todo'],
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-reduce': 'warn',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-optional-catch-binding': 'warn',
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
  },
};
