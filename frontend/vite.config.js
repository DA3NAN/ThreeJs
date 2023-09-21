import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@rollup/plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({
        include: ["src/**/*.+(js|jsx|ts)"],
        exclude: ["node_modules/**", "dist/**", "src/imageEditing/**"],
      }),
      enforce: "pre",
    },
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@config": path.resolve(__dirname, "src/config"),
      "@canvas": path.resolve(__dirname, "src/canvas"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
});
