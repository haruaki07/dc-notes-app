import React from "react"
import AppLayout from "./lib/layouts/AppLayout"
import NotesPage from "./pages/NotesPage"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppLayout>
        <NotesPage />
      </AppLayout>
    )
  }
}

export default App
