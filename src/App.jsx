import React from "react"
import AppLayout from "./lib/layouts/AppLayout"
import NotesPage from "./pages/NotesPage"
import ArchivePage from "./pages/ArchivePage"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppLayout>
        {({ page }) => {
          if (page === "notes") {
            return <NotesPage />
          } else if (page === "archive") {
            return <ArchivePage />
          }
        }}
      </AppLayout>
    )
  }
}

export default App
