import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    // Increase chunk size warning to 600kB (we have a large image set)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Code-split heavy vendor libraries into separate chunks for better caching
        manualChunks: {
          // React core
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          // Router
          "vendor-router": ["react-router-dom"],
          // Animation
          "vendor-motion": ["framer-motion"],
          // UI
          "vendor-ui": ["@radix-ui/react-tooltip", "@radix-ui/react-slot"],
          // Query
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
}));
