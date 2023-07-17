import AddNoteForm from "@/lib/components/AddNoteForm"
import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import Flex from "@/lib/ui/Flex"
import { getInitialNotes } from "@/utils"
import React from "react"
import styles from "./notespage.module.scss"
import IconNote from "@/lib/components/Icons/Note"
import Heading from "@/lib/ui/Heading"

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
      notes: getInitialNotes().filter((n) => !n.archived),
    }
  }

  render() {
    return (
      <Flex center="horizontal" direction="col" style={{ height: "100%" }}>
        <AddNoteForm />
        <Container center style={{ flexGrow: 1, paddingBottom: "1rem" }}>
          {/* Kriteria 3 No. 3 */}
          {this.state.notes.length > 0 ? (
            <NoteList notes={this.state.notes} />
          ) : (
            <Flex center direction="col" className={styles.notesEmpty}>
              <IconNote size={128} />
              <Heading level="3" className={styles.notesEmptyText}>
                Notes you add appear here
              </Heading>
            </Flex>
          )}
        </Container>
      </Flex>
    )
  }
}

export default NotesPage
