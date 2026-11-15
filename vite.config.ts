import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tushar.patil/",
  plugins: [react()],
  build: { sourcemap: true }
});
