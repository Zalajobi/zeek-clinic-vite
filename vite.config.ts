import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component": path.resolve(__dirname, "src/component"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@page": path.resolve(__dirname, "src/page"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@schema": path.resolve(__dirname, "src/schema"),
      "@type": path.resolve(__dirname, "src/type"),
      "@util": path.resolve(__dirname, "src/util"),
    },
  },
});
