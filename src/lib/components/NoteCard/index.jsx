import Heading from "@/lib/ui/Heading"
import styles from "./notecard.module.scss"
import Text from "@/lib/ui/Text"
import { showFormattedDate } from "@/utils"
import Flex from "@/lib/ui/Flex"
import IconButton from "@/lib/ui/IconButton"
import IconArchive from "../Icons/Archive"
import IconTrash from "../Icons/Trash"
import IconUnarchive from "../Icons/Unarchive"

/**
 * @type {React.FC<
 *   import("@/utils").Note & {
 *     onDelete: (id) => void
 *     onArchive: (id) => void
 *     onUnarchive: (id) => void
 *   }
 * >}
 */
const NoteCard = (props) => {
  const { id, title, body, archived, createdAt } = props

  return (
    <div className={styles.noteCard}>
      <div className={styles.noteContent}>
        <Heading level="6" className={styles.noteTitle}>
          {title}
        </Heading>
        <Text className={styles.noteDate}>
          {showFormattedDate(new Date(createdAt))}
        </Text>
        <Text className={styles.noteBody}>{body}</Text>
      </div>
      <Flex className={styles.noteActions}>
        {/* Kriteria 3 No. 1 */}
        <IconButton
          size="sm"
          title="Delete"
          color="red"
          onClick={() => props.onDelete(id)}
        >
          <IconTrash />
        </IconButton>

        {/* Kriteria Ops. 3 */}
        {archived ? (
          <IconButton
            size="sm"
            title="Unarchive"
            onClick={() => props.onUnarchive(id)}
          >
            <IconUnarchive size={18} />
          </IconButton>
        ) : (
          <IconButton
            size="sm"
            title="Archive"
            onClick={() => props.onArchive(id)}
          >
            <IconArchive size={18} />
          </IconButton>
        )}
      </Flex>
    </div>
  )
}

export default NoteCard
