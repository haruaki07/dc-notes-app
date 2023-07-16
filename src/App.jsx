import { useLayoutEffect } from "react"
import AppLayout from "./lib/layouts/AppLayout"
import { applyGlobalStyles } from "./lib/stitches"

function App() {
  useLayoutEffect(() => {
    applyGlobalStyles()
  }, [])

  return <AppLayout></AppLayout>
}

export default App
