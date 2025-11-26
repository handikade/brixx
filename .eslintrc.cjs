module.exports = {
  root: true,
  ignorePatterns: [
    'dist',
    'coverage',
    'tmp',
    'node_modules',
    '.angular',
    '**/*.js' // compiled outputs are ignored; lint TS sources instead
  ],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.json',
          './projects/brixx/tsconfig.lib.json',
          './projects/brixx/tsconfig.spec.json',
          './projects/demo/tsconfig.app.json',
          './projects/demo/tsconfig.spec.json'
        ],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        sourceType: 'module',
        ecmaVersion: 2022
      },
      plugins: ['@angular-eslint', '@typescript-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended'
      ],
      env: {
        browser: true,
        es2022: true
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ]
      }
    },
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ]
};
