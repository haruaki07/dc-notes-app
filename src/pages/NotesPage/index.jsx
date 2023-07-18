import AddNoteForm from "@/lib/components/AddNoteForm"
import IconNote from "@/lib/components/Icons/Note"
import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import Flex from "@/lib/ui/Flex"
import Heading from "@/lib/ui/Heading"
import React from "react"
import styles from "@/styles/modules/page.module.scss"
import { dequal } from "dequal"

/**
 * @typedef {{ notes: import("@/utils").Note[] }} State
 *
 * @typedef {{
 *   notes: import("@/utils").Note[]
 *   onAdd: (values: Pick<import("@/utils").Note, "title" | "body">) => void
 *   onDelete: (id) => void
 *   onArchive: (id) => void
 * }} Props
 */

/** @extends {React.Component<Props, State>} */
class NotesPage extends React.Component {
  /** @param {Props} props */
  constructor(props) {
    super(props)

    this.state = {
      notes: props.notes,
    }
  }

  componentDidUpdate(prevProps) {
    if (!dequal(prevProps.notes, this.props.notes)) {
      this.setState({
        notes: this.props.notes,
      })
    }
  }

  render() {
    return (
      <Flex center="horizontal" direction="col" style={{ height: "100%" }}>
        <AddNoteForm onAdd={this.props.onAdd} />
        <Container center style={{ flexGrow: 1, paddingBottom: "1rem" }}>
          {/* Kriteria 3 No. 3 */}
          {this.state.notes.length > 0 ? (
            <NoteList
              notes={this.state.notes}
              onDelete={this.props.onDelete}
              onArchive={this.props.onArchive}
            />
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
