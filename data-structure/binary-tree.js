/**
 * Left < Node < Right
 */

const createBinaryTree = initKeyList => {
  let root = null

  const insert = (node, key) => {
    const newNode = {
      key,
      left: null,
      right: null,
    }

    if (node === null) return newNode

    if (node.key === key) return node

    if (key > node.key) {
      node.right = insert(node.right, key)
    } else {
      node.left = insert(node.left, key)
    }

    return node
  }

  const findMin = node => {
    if (node === null) return null

    let minNode = node

    while (minNode.left !== null) {
      minNode = minNode.left
    }

    return minNode
  }

  const search = (node, key) => {
    if (node === null) return null

    if (key > node.key) return search(node.right, key)
    if (key < node.key) return search(node.left, key)

    return node
  }

  const getMaxNodesCount = node => {
    if (node === null) return 0

    const leftHeight = getMaxNodesCount(node.left)
    const rightHeight = getMaxNodesCount(node.right)

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
  }

  const getHeight = () => {
    const height = getMaxNodesCount(root)

    return height > 0 ? height - 1 : 0
  }

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach(key => {
      root = insert(root, key)
    })
  }

  return {
    root,
    insert,
    findMin,
    search,
    getHeight,
    getMaxNodesCount,
    getHeight
  }
}

const binaryTree = createBinaryTree([10, 7, 15, 5, 9, 20])
console.log(binaryTree.root) /**{
                                  key: 10,
                                  left: {
                                    key: 7,
                                    left: { key: 5, left: null, right: null },
                                    right: { key: 9, left: null, right: null }
                                  },
                                  right: { key: 15, left: null, right: { key: 20, left: null, right: null } }
                                } */

console.log(binaryTree.findMin(binaryTree.root)) // { key: 5, left: null, right: null }
console.log(binaryTree.getMaxNodesCount(binaryTree.root)) // 3
console.log(binaryTree.getHeight()) // 2