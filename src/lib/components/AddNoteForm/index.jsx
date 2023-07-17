import React from "react"
import Flex from "@/lib/ui/Flex"
import styles from "./addnoteform.module.scss"
import TextField from "@/lib/ui/TextField"
import clsx from "clsx"

/**
 * @typedef {{
 *   title: string
 *   body: string
 *   expand: boolean
 * }} FormState
 *
 * @typedef {{}} FormProps
 */

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

  handleFormBlur = (e) => {
    const { title, body } = this.state
    const isDirty = title.trim().length > 0 || body.trim().length > 0
    if (!e.currentTarget.contains(e.relatedTarget) && !isDirty) {
      this.setState({ expand: false })
    }
  }

  /** @param {React.SyntheticEvent<HTMLInputElement>} e */
  handleTitleChange = (e) => {
    this.setState({ title: e.currentTarget.value })
  }

  /** @param {React.SyntheticEvent<HTMLTextAreaElement>} e */
  handleBodyChange = (e) => {
    this.setState({ body: e.currentTarget.value })
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
            <TextField
              fullWidth
              size="lg"
              variant="transparent"
              placeholder="Title"
              className={styles.inputTitle}
              value={title}
              onChange={this.handleTitleChange}
            />
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
              <button type="button" className={styles.btnAdd}>
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
