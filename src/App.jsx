import React from "react"
import AppLayout from "./lib/layouts/AppLayout"
import NotesPage from "./pages/NotesPage"
import ArchivePage from "./pages/ArchivePage"
import { getInitialNotes } from "./utils"
import SearchPage from "./pages/SearchPage"

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
    const note = {
      id: Date.now().toString(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    }
    this.setState({ notes: [...this.state.notes, note] })
  }

  handleDeleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((n) => n.id !== id),
    })
  }

  handleToggleArchive = (id) => {
    this.setState({
      notes: this.state.notes.map((n) => ({
        ...n,
        archived: n.id === id ? !n.archived : n.archived,
      })),
    })
  }

  getActiveNotes = () => {
    return this.state.notes
      .filter((n) => !n.archived)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  getArchivedNotes = () => {
    return this.state.notes.filter((n) => n.archived).reverse()
  }

  searchNotes = (keywords = "") => {
    console.log(keywords)
    return this.state.notes
      .filter((n) => {
        return (
          n.title.toLowerCase().includes(keywords.toLowerCase()) ||
          n.body.toLowerCase().includes(keywords.toLowerCase())
        )
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  render() {
    const activeNotes = this.getActiveNotes()
    const archivedNotes = this.getArchivedNotes()

    return (
      <AppLayout>
        {({ page, keywords }) => {
          const isSearching = keywords.trim().length > 0
          if (isSearching) {
            return (
              <SearchPage
                notes={this.searchNotes(keywords)}
                onDelete={this.handleDeleteNote}
                onArchive={this.handleToggleArchive}
                onUnarchive={this.handleToggleArchive}
              />
            )
          }

          if (page === "notes" || isSearching) {
            return (
              <NotesPage
                notes={activeNotes}
                onAdd={this.handleAddNote}
                onDelete={this.handleDeleteNote}
                onArchive={this.handleToggleArchive}
              />
            )
          } else if (page === "archive") {
            return (
              <ArchivePage
                notes={archivedNotes}
                onDelete={this.handleDeleteNote}
                onUnarchive={this.handleToggleArchive}
              />
            )
          }
        }}
      </AppLayout>
    )
  }
}

export default App
