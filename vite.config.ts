import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This repository is the account-level GitHub Pages site:
  // https://tushar0945.github.io/
  base: "/",
  plugins: [react()],
  build: { sourcemap: true }
});
