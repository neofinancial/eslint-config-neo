/**
 * Minimal ESLint configuration for hexagonal architecture enforcement.
 *
 * Designed to be used alongside Biome.js for services that have migrated
 * from ESLint+Prettier to Biome for linting and formatting.
 *
 * This config ONLY enforces:
 * - import/no-restricted-paths (hexagonal layer boundaries)
 * - @typescript-eslint/no-restricted-imports (lodash tree-shaking, domain isolation)
 *
 * Usage in service's eslint.config.js:
 *   const architecture = require('eslint-config-neo/config-architecture');
 *   module.exports = [...architecture];
 */
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');

// Hexagonal architecture zone restrictions
const hexagonalZones = [
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
];

// Lodash tree-shaking restriction
const lodashRestriction = {
  paths: [
    {
      name: 'lodash',
      message: "Please use `import [package] from 'lodash/[package]'` instead.",
    },
  ],
  patterns: ['!lodash/*'],
};

// Domain layer infrastructure restrictions
const domainLayerRestrictions = {
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
};

module.exports = [
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Hexagonal architecture layer boundaries
      'import/no-restricted-paths': ['error', { zones: hexagonalZones }],
    },
  },
  // TypeScript files - lodash tree-shaking
  tseslint.configs.base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-restricted-imports': ['error', lodashRestriction],
    },
  },
  // Domain layer - cannot import infrastructure details
  {
    files: ['./src/domain/**/*.ts', './src/domain/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': ['error', domainLayerRestrictions],
    },
  },
];
