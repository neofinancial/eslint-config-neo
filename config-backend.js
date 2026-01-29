const globals = require('globals');
const configBase = require('./config-base');
const configArchitecture = require('./config-architecture');

module.exports = [
  ...configBase,
  ...configArchitecture,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mongo,
      },
    },
    rules: {
      'n/no-unpublished-require': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
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
