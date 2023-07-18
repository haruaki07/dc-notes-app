/**
 * @param {Node} node
 * @param {Node} target
 */
export function containsElement(node, target) {
  if (node.contains(target)) {
    return true
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType === Node.ELEMENT_NODE) {
      if (containsElement(node.childNodes[i], target)) {
        return true
      }
    }
  }

  return false
}
