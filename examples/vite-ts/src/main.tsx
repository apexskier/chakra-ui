import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"

const cache = createCache({
  key: "chakra-vite-test",
  nonce: "exampleexample",
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </CacheProvider>
  </React.StrictMode>,
)
