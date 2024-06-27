module.exports = {
  plugins: ['@graphql-eslint'],
  parser: '@graphql-eslint/eslint-plugin',
  rules: {
    '@graphql-eslint/known-type-names': 'warn',
    '@graphql-eslint/require-deprecation-reason': 'warn',
    '@graphql-eslint/no-scalar-result-type-on-mutation': 'warn',
    '@graphql-eslint/no-duplicate-fields': 'warn',
  },
  parserOptions: {
    skipGraphQLConfig: true,
  },
  ignorePatterns: ['customer-schema.graphql', 'admin-schema.graphql', 'partner-schema.graphql'],
  overrides: [
    {
      files: ['admin-federated-schema.graphql'],
      parserOptions: {
        schema: './lib/admin-federated-schema.graphql',
      },
    },
    {
      files: ['customer-federated-schema.graphql'],
      parserOptions: {
        schema: './lib/customer-federated-schema.graphql',
      },
    },
    {
      files: ['partner-federated-schema.graphql'],
      parserOptions: {
        schema: './lib/partner-federated-schema.graphql',
      },
    },
    {
      files: ['service-schema.graphql'],
      parserOptions: {
        schema: './lib/service-schema.graphql',
      },
    },
  ],
};
