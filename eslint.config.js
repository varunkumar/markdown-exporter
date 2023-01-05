import { FlatCompat } from '@eslint/eslintrc'; // eslint-disable-line

const compat = new FlatCompat({});

export default [
  {
    ignores: ['build/*', 'node_modules/*'],
  },
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb-base',
      'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'import/extensions': ['off', 'ignorePackages'],
      'operator-linebreak': ['error', 'after'],
    },
  }),
];
