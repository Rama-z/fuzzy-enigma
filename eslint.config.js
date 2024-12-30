import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_$",
          argsIgnorePattern: "^_$",
        },
      ],
    },
  }
);

// eslint.config.js
// module.exports = {
//   root: true, // Pastikan ESLint memeriksa dari root proyek
//   parser: "@typescript-eslint/parser", // Parser untuk TypeScript
//   parserOptions: {
//     ecmaVersion: 2021, // Mendukung sintaks modern
//     sourceType: "module", // Menggunakan modul ECMAScript
//     ecmaFeatures: {
//       jsx: true, // Mendukung JSX
//     },
//   },
//   settings: {
//     react: {
//       version: "detect", // Secara otomatis mendeteksi versi React
//     },
//   },
//   env: {
//     browser: true, // Mendukung variabel browser (window, document, dll.)
//     es2021: true, // Mendukung ES2021 global
//     node: true, // Mendukung variabel Node.js
//   },
//   plugins: ["react", "@typescript-eslint"],
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:jsx-a11y/recommended", // Opsional: untuk aksesibilitas JSX
//     "prettier", // Opsional: integrasi dengan Prettier
//   ],
//   rules: {
//     "no-unused-vars": "warn", // Aturan no-unused-vars hanya warn
//     "@typescript-eslint/no-unused-vars": ["warn"], // Untuk mendukung TypeScript
//     "react/prop-types": "off", // Menonaktifkan prop-types karena menggunakan TypeScript
//   },
// };
