/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
    'tailwindcss',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  settings: {
    react: { version: 'detect' },
    // важливо: щоб імпорти типу "@/..." і стандартні імпорти коректно резолвились
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    tailwindcss: { callees: ['cn'] },
  },
  rules: {
    // React 18: не потрібен імпорт React у файлах
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // Порядок імпортів
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // Tailwind попередження не блокує CI
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/enforces-shorthand': 'warn',
  },
};
