# Changelog

## 0.12.1 (January 6, 2025)

- vulnerability fixes

## 0.12.0 (October 4, 2024)

- removed `import/no-restricted-paths` for importing from `src/configuration`

## 0.11.2 (September 24, 2024)

- vulnerabilities fixes

## 0.11.1 (April 21, 2024)

- fixes `autofix/no-unused-vars` rule to match existing rules from `@typescript-eslint/no-unused-vars`

## 0.11.0 (April 9, 2024)

- adds `eslint-plugin-autofix` package
- adds `autofix/no-unused-vars` and `autofix/sort-imports` both as warning
- This changes allows eslint to remove unused imports and to sort the imports in the natural order

## 0.10.0 (March 8, 2024)

- Move `no-floating-promises` rule to the base config
- Updated dependencies - requires Prettier 3, TypeScript 5, and ESLint 8

## 0.9.0 (October 27, 2023)

- supporting Typescript v5

## 0.8.0 (June 7, 2023)

- Upgraded eslint-plugin-unicorn
- Upgraded dependencies
- Added `expiring-todo-comments` rule

## 0.7.0 (March 21, 2023)

- Use eslint version 8
- Added Hex import restrictions rules
- Added library import restrictions rules

## 0.7.0 (March 21, 2023)

- Use eslint version 8
- Added Hex import restrictions rules
- Added library import restrictions rules

## 0.6.4 (February 22, 2023)

- Enforce curlies on `if...else` statements with the `curly` rule

## 0.6.3 (January 25, 2022)

- Disable `@typescript-eslint/interface-name-prefix` rule

## 0.6.2 (January 29, 2021)

- Disable `no-useless-undefined` rule in tests
- Disable `unicorn/prefer-set-has` rule
- Disable `unicorn/prefer-trim-start-end` rule

## 0.6.1 (November 22, 2020)

- Disable `no-null` rule in base config

## 0.6.0 (November 22, 2020)

- Update dependencies to support TypeScript 4, ESLint 7 and Prettier 2
- Add `config-backend-next` and `config-frontend-next` with rules being considered for a future release
- Enable `@typescript-eslint/no-unused-before-define` rule as error in TypeScript files
- Enable `@typescript-eslint/prefer-optional-chain` rule as warning
- Enable `unicorn/no-reduce` rule as warning
- Enable `unicorn/prefer-optional-catch-binding` rule as warning
- Disable `@typescript-eslint/explicit-module-boundary-types` rule in test files
- Disable `@typescript-eslint/no-empty-function` rule in test files

## 0.5.2 (January 9, 2020)

- Add `varsIgnorePattern` to `@typescript-eslint/no-unused-vars` rule

## 0.5.1 (November 27, 2019)

- Disable `unicorn/catch-error-name` rule
- Disable `unicorn/consistent-function-scoping` rule

## 0.5.0 (November 24, 2019)

- Update `@typescript-eslint` and other dependencies to support optional chaining
- Drop support for ESLint 5

## 0.4.2 (November 4, 2019)

- Disable `require-atomic-updates` rule

## 0.4.1 (October 30, 2019)

- Disable `eslint-plugin-node` rules that conflict with `eslint-plugin-import`
- Enable Jest style rules

## 0.4.0 (October 16, 2019)

- Add support for ESLint 6
- Update `typescript-eslint` to `2.4.0`
- Update all dependencies

## 0.3.3 (August 30, 2019)

- Revert `@typescript-eslint/promise-function-async` rule due to performance issues

## 0.3.2 (August 27, 2019)

- `@typescript-eslint/promise-function-async` on
- `require-await` off (conflicts with above)

## 0.3.1 (June 24, 2019)

- Bump eslint-plugin-jest to `22.7.0`

## 0.3.0 (June 14, 2019)

- Add import plugin
- Ignore some rules in tests

## 0.2.0 (May 7, 2019)

- Add React Hooks plugin
- Remove Lodash plugin
- Remove no-loops plugin

## 0.1.0 (April 11, 2019)

Initial release! :tada:
