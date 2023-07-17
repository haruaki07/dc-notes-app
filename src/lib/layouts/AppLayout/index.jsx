import Navbar from "@/lib/components/Navbar"
import Sidebar from "@/lib/components/Sidebar"
import Flex from "@/lib/ui/Flex"
import React from "react"
import styles from "./applayout.module.scss"
import clsx from "clsx"

/**
 * @typedef {{ sidebarExpand: boolean; page: "notes" | "archive" }} State
 *
 * @typedef {React.PropsWithChildren} Props
 */

/** @extends {React.Component<Props, State>} */
class AppLayout extends React.Component {
  /** @param {Props} props */
  constructor(props) {
    super(props)

    /** @type {State} */
    this.state = {
      sidebarExpand: window.innerWidth < 650 ? false : true,
      page: "notes",
    }
  }

  handleToggleSidebar = () => {
    this.setState({ sidebarExpand: !this.state.sidebarExpand })
  }

  render() {
    return (
      <Flex className={styles.root}>
        <Navbar onSidebarToggle={this.handleToggleSidebar} />
        <div className={styles.main}>
          <Sidebar
            expand={this.state.sidebarExpand}
            active={this.state.page}
            onChange={(page) => this.setState({ page })}
          />
          <div
            className={clsx(
              styles.mainContent,
              this.state.sidebarExpand && styles.mainContentExpand
            )}
          >
            {this.props.children({ page: this.state.page })}
          </div>
        </div>
      </Flex>
    )
  }
}

export default AppLayout
