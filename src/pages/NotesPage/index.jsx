import AddNoteForm from "@/lib/components/AddNoteForm"
import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import Flex from "@/lib/ui/Flex"
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
    // Kriteria 1 No. 1 dan 2; Kriteria 2 No. 3 dan 4
    this.state = {
      notes: getInitialNotes(),
    }
  }

  render() {
    return (
      <Flex center="horisontal" direction="col" style={{ height: "100%" }}>
        <AddNoteForm />
        <Container center style={{ flexGrow: 1 }}>
          <NoteList notes={this.state.notes} />
        </Container>
      </Flex>
    )
  }
}

export default NotesPage
