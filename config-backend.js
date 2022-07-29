module.exports = {
  extends: ['./config-base.js'],
  env: {
    node: true,
    mongo: true,
  },
  rules: {
    'node/no-unpublished-require': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    "@typescript-eslint/no-empty-interface": 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              "Please use `import [package] from 'lodash/[package]'` instead."
          }
        ],
        patterns: ['!lodash/*']
      }
    ],
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
            target: './src/domain',
            from: './src/configuration',
            message: 'Hex Arch - Cannot import from configuration in the domain layer',
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
            message: 'Test code - Cannot import from test in the src code'
          },
          {
            target: './test/domain',
            from: './src/infrastructure',
            message: 'Hex: domain layer cannot know about the infrastructure layer, even in tests'
          },
          {
            target: './test/domain',
            from: './src/configuration',
            message: 'Hex: domain layer cannot know about the configuration layer, even in tests'
          },
          {
            target: './test/domain',
            from: './src/application',
            message: 'Hex: domain layer cannot know about the application layer, even in tests'
          },
          {
            target: './test/infrastructure',
            from: './src/application',
            message: 'Hex: infrastructure layer cannot know about the application layer, even in tests'
          },
          {
            target: './test/application',
            from: './src/infrastructure',
            message: 'Hex: application layer cannot know about the infrastructure layer, even in tests'
          }
        ],
      },
    ],
  },
  overrides: [
    {
      files: [ './src/domain/**/*' ],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            name: 'aws-sdk',
            message: 'Hex: domain layer can only know type details from infrastructure (AWS). Try `import type { Thing } from "aws-sdk"`',
            allowTypeImports: true
          },
          {
            name: 'mongodb',
            message: 'Hex: domain layer can only know type details from infrastructure (MongoDB). Try `import type { Thing } from "mongodb"`',
            allowTypeImports: true
          },
          {
            name: 'mongoose',
            message: 'Hex: domain layer can only know type details from infrastructure (MongoDB). Try `import type { Thing } from "mongoose"`',
            allowTypeImports: true
          }
        ]
      }
    },
    {
      files: [ '**/migrations/**/*' ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-extraneous-dependencies": "off",
        "no-console": "off"
      }
    }
  ]
};
