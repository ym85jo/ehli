import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 여기에 추가적인 규칙을 설정할 수 있습니다
      // 사용하지 않는 변수에 대한 경고 설정
      // args: 'none' - 함수 매개변수는 사용하지 않아도 경고하지 않음
      'no-unused-vars': [
        'warm',
        {
          args: 'off',
        },
      ],
      // 'no-console': 'warn',
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
