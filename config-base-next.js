module.exports = {
  extends: ['./config-base.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
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
    {
      files: ['**/test/**/*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
};
