import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Listens on all local IPs (0.0.0.0)
    port: 5173, // Optional: Specify your preferred port
    strictPort: true, // Optional: Fails if port is already in use instead of picking next available
  },
})