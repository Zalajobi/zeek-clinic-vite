import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: pluginPrettier,
      "@typescript-eslint": tseslint,
      react: pluginReact,
    },
    rules: {
      "prettier/prettier": "error", // Use Prettier as an ESLint rule
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Disable ESLint rules that would conflict with Prettier
];
