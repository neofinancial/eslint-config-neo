const namingConventionRule = {
  InputValueDefinition: { style: 'camelCase' },
  InputObjectTypeDefinition: { style: 'PascalCase', requiredSuffixes: ['Input'] },
  FieldDefinition: 'camelCase',
  'FieldDefinition[parent.name.value=Mutation]': { style: 'camelCase', forbiddenSuffixes: ['Mutation'] },
  'FieldDefinition[parent.name.value=Query]': { style: 'camelCase', forbiddenSuffixes: ['Query'] },
  allowLeadingUnderscore: true,
};

module.exports = {
  plugins: ['@graphql-eslint'],
  parser: '@graphql-eslint/eslint-plugin',
  rules: {
    '@graphql-eslint/known-type-names': 'warn',
    '@graphql-eslint/require-deprecation-reason': 'error',
    '@graphql-eslint/no-scalar-result-type-on-mutation': 'warn',
    '@graphql-eslint/no-duplicate-fields': 'warn',
    '@graphql-eslint/naming-convention': ['error', namingConventionRule],
  },
  parserOptions: {
    skipGraphQLConfig: true,
  },
  ignorePatterns: ['customer-schema.graphql', 'admin-schema.graphql', 'partner-schema.graphql'],
  overrides: [
    {
      files: ['customer-federated-schema.graphql'],
      parserOptions: {
        schema: './lib/customer-federated-schema.graphql',
      },
      rules: {
        '@graphql-eslint/naming-convention': ['warn', namingConventionRule],
      },
    },
    {
      files: ['admin-federated-schema.graphql'],
      parserOptions: {
        schema: './lib/admin-federated-schema.graphql',
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
