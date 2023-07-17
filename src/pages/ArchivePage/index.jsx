import IconNote from "@/lib/components/Icons/Note"
import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import Flex from "@/lib/ui/Flex"
import Heading from "@/lib/ui/Heading"
import { getInitialNotes } from "@/utils"
import React from "react"
import styles from "./archivepage.module.scss"
import IconArchive from "@/lib/components/Icons/Archive"
import { dequal } from "dequal"

/**
 * @typedef {{}} State
 *
 * @typedef {{ notes: import("@/utils").Note[] }} Props
 */

/** @extends {React.Component<Props, State>} */
class ArchivePage extends React.Component {
  /** @param {Props} props */
  constructor(props) {
    super(props)
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
        <Container center style={{ flexGrow: 1, padding: "1rem 0" }}>
          {/* Kriteria 3 No. 3 */}
          {this.props.notes.length > 0 ? (
            <NoteList notes={this.props.notes} />
          ) : (
            <Flex center direction="col" className={styles.notesEmpty}>
              <IconArchive size={128} />
              <Heading level="3" className={styles.notesEmptyText}>
                Your archived notes appear here
              </Heading>
            </Flex>
          )}
        </Container>
      </Flex>
    )
  }
}

export default ArchivePage
