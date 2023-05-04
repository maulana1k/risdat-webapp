import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@mui/material": path.resolve(__dirname, "./node_modules/@mui/material"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@mui/material", "react-icons"],
        },
      },
    },
  },
});
