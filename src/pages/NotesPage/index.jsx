import AddNoteForm from "@/lib/components/AddNoteForm"
import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import { getInitialNotes } from "@/utils"
import React from "react"

/**
 * @typedef {{ notes: import("@/utils").Note[] }} State
 *
 * @typedef {{}} Props
 */

/** @extends {React.Component<Props, State>} */
class NotesPage extends React.Component {
  /** @param {Props} props */
  constructor(props) {
    super(props)

    /** @type {State} */
    this.state = {
      notes: getInitialNotes(),
    }
  }

  render() {
    return (
      <>
        <AddNoteForm />
        <Container center>
          <NoteList notes={this.state.notes} />
        </Container>
      </>
    )
  }
}

export default NotesPage
