module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    // 必要に応じて追加のルールをここに記述
  },
  settings: {
    tailwindcss: {
      // Tailwind CSSの設定ファイルを指定
      config: "tailwind.config.js",
    },
  },
};
