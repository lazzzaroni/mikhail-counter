/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: ["eslint:recommended"],

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react/jsx-no-leaked-render": [
          "warn",
          { validStrategies: ["ternary"] },
        ],

        // copy from @remix-run/eslint-config
        "react/display-name": "warn",
        "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
        "react/jsx-key": "warn",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": ["warn", { allowAllCaps: true, ignore: [] }],
        "react/jsx-uses-vars": "warn",
        "react/jsx-uses-react": "warn",
        "react/no-danger-with-children": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-find-dom-node": "warn",
        "react/no-is-mounted": "warn",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "warn",
        "react/no-typos": "warn",
        "react/react-in-jsx-scope": "off",
        "react/require-render-return": "error",
        "react/style-prop-object": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",

        // overwrite eslint:recommended rules
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      rules: {
        "import/order": [
          "error",
          {
            alphabetize: { caseInsensitive: true, order: "asc" },
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            "newlines-between": "always",
          },
        ],
        // copy from @remix-run/eslint-config
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
      },
    },

    // Node
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
    },
  ],
};
