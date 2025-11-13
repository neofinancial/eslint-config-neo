const globals = require('globals');
const configBase = require('./config-base');

module.exports = [
  ...configBase,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mongo,
      },
    },
    rules: {
      'n/no-unpublished-require': 'warn',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/domain',
              from: './src/infrastructure',
              except: ['./repositories/repository-compatibility-interfaces.ts'],
              message: 'Hex Arch - Cannot import from infrastructure in the domain layer',
            },
            {
              target: './src/domain',
              from: './src/application',
              message: 'Hex Arch - Cannot import from application in the domain layer',
            },
            {
              target: './src/application',
              from: './src/infrastructure',
              message: 'Hex Arch - Cannot import from infrastructure in the application layer',
            },
            {
              target: './src/infrastructure',
              from: './src/application',
              message: 'Hex Arch - Cannot import from application in the infrastructure layer',
            },
            {
              target: './src',
              from: './test',
              message: 'Test code - Cannot import test code into src',
            },
            {
              target: './test/domain',
              from: './src/infrastructure',
              message: 'Hex: domain layer cannot know about the infrastructure layer, even in tests',
            },
            {
              target: './test/domain',
              from: './src/application',
              message: 'Hex: domain layer cannot know about the application layer, even in tests',
            },
            {
              target: './test/infrastructure',
              from: './src/application',
              message: 'Hex: infrastructure layer cannot know about the application layer, even in tests',
            },
            {
              target: './test/application',
              from: './src/infrastructure',
              message: 'Hex: application layer cannot know about the infrastructure layer, even in tests',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash',
              message: "Please use `import [package] from 'lodash/[package]'` instead.",
            },
          ],
          patterns: ['!lodash/*'],
        },
      ],
    },
  },
  // Domain layer restrictions (TypeScript files only)
  {
    files: ['./src/domain/**/*.ts', './src/domain/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@neofinancial/neo-framework',
              importNames: ['!BaseRepositoryPort'],
              message: 'Hex: domain layer cannot know infrastructure details (MongoDB)',
            },
            {
              name: 'mongodb',
              message: 'Hex: domain layer cannot know infrastructure details (MongoDB)',
            },
            {
              name: 'mongoose',
              message: 'Hex: domain layer cannot know infrastructure details (MongoDB)',
            },
            {
              name: '@neofinancial/neo-queue',
              message: 'Hex: domain layer cannot know infrastructure details (queues)',
            },
            {
              name: 'aws-sdk',
              message: 'Hex: domain layer cannot know infrastructure details (AWS)',
            },
            {
              name: '@neofinancial/neo-qldb',
              message: 'Hex: domain layer cannot know infrastructure details (QLDB)',
            },
            {
              name: '@neofinancial/neo-redis-client',
              message: 'Hex: domain layer cannot know infrastructure details (Redis)',
            },
            {
              name: '@neofinancial/neo-s3',
              message: 'Hex: domain layer cannot know infrastructure details (S3)',
            },
            {
              name: '@neofinancial/neo-elasticsearch',
              message: 'Hex: domain layer cannot know infrastructure details (Elasticsearch)',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/dependency-registries/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  // Migration and script files
  {
    files: ['**/migrations/**/*', '**/scripts/**/*', '**/manual_migrations/**/*'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          includeInternal: true,
          includeTypes: true,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
    },
  },
];
