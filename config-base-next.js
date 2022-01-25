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
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        'unicorn/no-null': 'warn'
      }
    }
  ]
};
