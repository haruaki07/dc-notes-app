import React from "react"
import Masonry from "react-masonry-list"
import NoteCard from "../NoteCard"
import { dequal } from "dequal"

/**
 * @typedef {{
 *   notes: import("@/utils").Note[]
 *   column: number
 *   columnMinWidth: number
 * }} State
 *
 * @typedef {{
 *   notes: import("@/utils").Note[]
 *   onDelete: (id) => void
 *   onArchive: (id) => void
 *   onUnarchive: (id) => void
 * }} Props
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

  componentDidUpdate(prevProps) {
    if (!dequal(prevProps.notes, this.props.notes)) {
      this.setState({
        notes: this.props.notes,
      })
    }
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
    return (
      <Masonry
        minWidth={80}
        colCount={this.state.column}
        // Kriteria 1 No. 3
        items={this.state.notes.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
            onDelete={this.props.onDelete}
            onArchive={this.props.onArchive}
            onUnarchive={this.props.onUnarchive}
          />
        ))}
      ></Masonry>
    )
  }
}

export default NoteList
