import React from "react"
import AppLayout from "./lib/layouts/AppLayout"
import NotesPage from "./pages/NotesPage"
import ArchivePage from "./pages/ArchivePage"
import { getInitialNotes } from "./utils"

/** @typedef {{ notes: import("./utils").Note[] }} State */

/** @extends {React.Component<{}, State>} */
class App extends React.Component {
  constructor(props) {
    super(props)

    /**
     * Kriteria 1 No. 1 dan 2; Kriteria 2 No. 3 dan 4
     *
     * @type {State}
     */
    this.state = {
      notes: getInitialNotes(),
    }
  }

  /** @param {Pick<import("./utils").Note, "title" | "body">} value */
  handleAddNote = ({ title, body }) => {
    console.log("bro")
    const note = {
      id: Date.now().toString(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    }
    this.setState({ notes: [note, ...this.state.notes] })
  }

  render() {
    return (
      <AppLayout>
        {({ page }) => {
          if (page === "notes") {
            return (
              <NotesPage
                notes={this.state.notes.filter((n) => !n.archived)}
                onAddNote={this.handleAddNote}
              />
            )
          } else if (page === "archive") {
            return (
              <ArchivePage notes={this.state.notes.filter((n) => n.archived)} />
            )
          }
        }}
      </AppLayout>
    )
  }
}

export default App
