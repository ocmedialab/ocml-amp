import tseslint from 'typescript-eslint';

const { plugin: typescriptPlugin, parser: tsParser, config: tsConfig } = tseslint;

export default tsConfig({
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['dist/**/*', 'node_modules/**/*'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: ['./tsconfig.eslint.json'], // as array for better monorepo compatibility
      tsconfigRootDir: process.cwd(),
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
});
