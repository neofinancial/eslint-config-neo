module.exports = {
  extends: ['./config-base.js'],
  overrides: [
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
            checkMethodDeclarations: true
          }
        ],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/return-await': 'error',

        'unicorn/no-null': 'warn'
      }
    },
    {
      files: ['**/test/**/*'],
      rules: {
        'unicorn/no-null': 'off'
      }
    }
  ]
};
