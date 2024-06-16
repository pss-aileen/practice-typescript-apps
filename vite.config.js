// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        commitMessageGenerator: resolve(__dirname, "commit-message-generator/index.html"),
        simpleModal: resolve(__dirname, "simple-modal/index.html"),
        randomQuote: resolve(__dirname, "random-quote/index.html"),
      },
    },
  },
});
