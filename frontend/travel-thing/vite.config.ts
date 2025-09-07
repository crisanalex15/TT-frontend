import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
  },
  preview: {
    port: 3000,
    host: "0.0.0.0",
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
