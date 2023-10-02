import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader(
            "Content-Security-Policy",
            "default-src 'self' 'nonce-exampleexample';",
          )
          next()
        })
      },
    },
    react(),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
  server: {
    hmr: {
      protocol: "ws", // force insecure, since our ssl stuff won't proxy this
      host: "localhost",
      port: 53314, // just a random port to avoid conflicts
    },
  },
})
