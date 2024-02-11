import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    // see: https://qiita.com/Garyo99/items/efacbacd5d8d3cf1848a
    alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
  },
});
