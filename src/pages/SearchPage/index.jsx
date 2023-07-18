import NoteList from "@/lib/components/NoteList"
import Container from "@/lib/ui/Container"
import Flex from "@/lib/ui/Flex"
import Text from "@/lib/ui/Text"
import styles from "@/styles/modules/page.module.scss"
import { dequal } from "dequal"
import React from "react"

/**
 * @typedef {{ notes: import("@/utils").Note[] }} State
 *
 * @typedef {{
 *   onDelete: (id) => void
 *   onArchive: (id) => void
 *   onUnarchive: (id) => void
 * }} Props
 */

/** @extends {React.Component<Props, State>} */
class SearchPage extends React.Component {
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
        <Container center style={{ flexGrow: 1, padding: "1rem 0" }}>
          {/* Kriteria 3 No. 2 */}
          {this.state.notes.length > 0 ? (
            <NoteList
              notes={this.state.notes}
              onDelete={this.props.onDelete}
              onArchive={this.props.onArchive}
              onUnarchive={this.props.onUnarchive}
            />
          ) : (
            <Flex center="horizontal">
              <Text>Match no result.</Text>
            </Flex>
          )}
        </Container>
      </Flex>
    )
  }
}

export default SearchPage
