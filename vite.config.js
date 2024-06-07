// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/pss-aileen.github.io/practice-typescript-apps/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        commitMessageGenerator: resolve(__dirname, "commit-message-generator/index.html"),
        simpleModal: resolve(__dirname, "simple-modal/index.html"),
      },
    },
  },
});
