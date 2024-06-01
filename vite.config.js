// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        commitMessageGenerator: resolve(__dirname, "commit-message-generator/index.html"),
      },
    },
  },
});
