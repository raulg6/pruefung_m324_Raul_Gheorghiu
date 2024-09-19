export default [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];
