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

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach(key => {
      root = insert(root, key)
    })
  }

  return {
    root,
    insert,
  }
}

const binaryTree = createBinaryTree([10, 7, 15, 5, 9, 20])
console.log(binaryTree.root)/**{
                                  key: 10,
                                  left: {
                                    key: 7,
                                    left: { key: 5, left: null, right: null },
                                    right: { key: 9, left: null, right: null }
                                  },
                                  right: { key: 15, left: null, right: { key: 20, left: null, right: null } }
                                } */
