import React, { createRef } from "react"
import NoteCard from "../NoteCard"
import Masonry from "react-masonry-list"
import styles from "./notelist.module.scss"
import Flex from "@/lib/ui/Flex"
import IconNote from "../Icons/Note"
import Heading from "@/lib/ui/Heading"

/**
 * @typedef {{
 *   notes: import("@/utils").Note[]
 *   column: number
 *   columnMinWidth: number
 * }} State
 *
 * @typedef {{ notes: import("@/utils").Note[] }} Props
 */

/** @extends {React.Component<Props, State>} */
class NoteList extends React.Component {
  /** @param {Props} props */
  constructor(props) {
    super(props)

    /** @type {State} */
    this.state = {
      notes: props.notes,
      column: this.settingColumns(),
      columnMinWidth: 80,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    this.setState({
      column: this.settingColumns(),
    })
  }

  settingColumns = () => {
    if (window.innerWidth >= 2560) return 8
    if (window.innerWidth >= 1920) return 7
    if (window.innerWidth >= 1680) return 6
    if (window.innerWidth >= 1440) return 5
    if (window.innerWidth >= 1280) return 4
    if (window.innerWidth >= 650) return 3
    if (window.innerWidth > 480) return 2
    return 1
  }

  render() {
    // Kriteria 3 No 3
    if (this.state.notes.length < 1) {
      return (
        <Flex center direction="col" className={styles.noteListEmpty}>
          <IconNote size={128} />
          <Heading level="3" className={styles.noteListEmptyText}>
            Notes you add appear here
          </Heading>
        </Flex>
      )
    }

    return (
      <Masonry
        className={styles.noteList}
        minWidth={80}
        colCount={this.state.column}
        // Kriteria 1 No. 3
        items={this.state.notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      ></Masonry>
    )
  }
}

export default NoteList
