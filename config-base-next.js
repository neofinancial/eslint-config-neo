const configBase = require('./config-base');

module.exports = [
  ...configBase,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/promise-function-async': [
        'error',
        {
          allowedPromiseNames: ['Thenable'],
          checkArrowFunctions: true,
          checkFunctionDeclarations: true,
          checkFunctionExpressions: true,
          checkMethodDeclarations: true,
        },
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': 'error',
      'unicorn/no-null': 'warn',
    },
  },
];
