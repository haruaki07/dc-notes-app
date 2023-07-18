import React from "react"
import Flex from "@/lib/ui/Flex"
import styles from "./addnoteform.module.scss"
import TextField from "@/lib/ui/TextField"
import clsx from "clsx"
import { containsElement } from "@/utils/dom"

/**
 * @typedef {{ title: string; body: string }} Values
 *
 * @typedef {{
 *   title: string
 *   body: string
 *   expand: boolean
 * }} FormState
 *
 * @typedef {{
 *   onAdd: (values: Values) => void
 * }} FormProps
 */

const MAX_TITLE_LEN = 50

/** @extends {React.Component<FormProps, FormState>} */
class AddNoteForm extends React.Component {
  /** @param {FormProps} props */
  constructor(props) {
    super(props)

    /**
     * Kriteria 2 No. 2
     *
     * @type {FormState}
     */
    this.state = {
      title: "",
      body: "",
      expand: false,
    }
  }

  handleFormFocus = () => {
    this.setState({ expand: true })
  }

  isDirty = () => {
    return (
      this.state.title.trim().length > 0 || this.state.body.trim().length > 0
    )
  }

  handleFormBlur = (e) => {
    console.log(e)
    if (!containsElement(e.currentTarget, e.relatedTarget) && !this.isDirty()) {
      this.setState({ expand: false })
    }
  }

  /** @param {React.SyntheticEvent<HTMLInputElement>} e */
  handleTitleChange = (e) => {
    const val = e.currentTarget.value
    // Kriteria Ops. 2 No. 1, 2 (title should not exceed 50 chars)
    this.setState({ title: val.slice(0, MAX_TITLE_LEN) })
  }

  /** @param {React.SyntheticEvent<HTMLTextAreaElement>} e */
  handleBodyChange = (e) => {
    this.setState({ body: e.currentTarget.value })
  }

  handleBtnAdd = () => {
    if (this.isDirty()) {
      this.props.onAdd?.({ title: this.state.title, body: this.state.body })
      this.setState({ title: "", body: "" })
    }
  }

  render() {
    const { title, body, expand } = this.state

    return (
      <Flex center className={styles.wrapper}>
        <div
          className={clsx(styles.form, expand && styles.formFocused)}
          onFocus={this.handleFormFocus}
          onBlur={this.handleFormBlur}
        >
          {expand && (
            <div className={styles.inputTitleWrapper}>
              <TextField
                fullWidth
                size="lg"
                variant="transparent"
                placeholder="Title"
                className={styles.inputTitle}
                value={title}
                onChange={this.handleTitleChange}
              />
              {/* Kriteria Ops. 2 No. 3 */}
              <span tabIndex={-1} className={styles.inputTitleLimitText}>
                {this.state.title.length}/{MAX_TITLE_LEN}
              </span>
            </div>
          )}
          <TextField
            fullWidth
            size={expand ? "md" : "lg"}
            variant="transparent"
            className={styles.inputBody}
            placeholder="Take a note..."
            multiLine={1}
            autoGrow={expand && 10}
            value={body}
            onChange={this.handleBodyChange}
          />
          {expand && (
            <>
              <button
                type="button"
                className={styles.btnAdd}
                onClick={this.handleBtnAdd}
              >
                Add
              </button>
            </>
          )}
        </div>
      </Flex>
    )
  }
}

export default AddNoteForm
