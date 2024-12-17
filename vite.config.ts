import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    nodePolyfills({ include: ["http", "https"] }),
  ],
  server: {
    host: true,
    port: 9000,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
