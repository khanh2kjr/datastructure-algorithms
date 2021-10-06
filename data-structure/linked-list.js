/**
 * Linked list (Single)
 * Example: |5, pointer|-->|10, pointer|-->|15, pointer|-->|20, pointer|-->NULL
 * |5, pointer| === NODE, 5 === data/value
 * First Node === HEAD (|5, pointer|)
 * Last Node === TAIL (|20, pointer|)
 */

const createLinkedList = () => {
  let head = null

  const insertHead = newData => {
    const newNode = {
      data: newData,
      next: null,
    }

    if (head === null) {
      head = newNode
    } else {
      newNode.next = head
      head = newNode
    }

    return head
  }

  const insertTail = newData => {
    const newNode = {
      data: newData,
      next: null,
    }

    if (head === null) {
      head = newNode
    } else {
      const tail = getTail()
      tail.next = newNode
    }

    return head
  }

  const insertBeforePosition = (newData, position) => {
    if (position <= 0 || head === null) {
      insertHead(newData)
    } else if (position >= getSize()) {
      insertTail(newData)
    } else {
      let previous = head
      let current = head
      let index = 0

      while (index < position && current !== null) {
        previous = current
        current = current.next
        index++
      }

      const newNode = {
        data: newData,
        next: current,
      }
      previous.next = newNode
    }

    return head
  }

  const removeHead = () => {
    if (head !== null) head = head.next

    return head
  }

  const removeTail = () => {
    if (head === null) return null

    if (head.next === null) {
      head = null

      return head
    }

    let secondLast = head

    while (secondLast.next.next !== null) {
      secondLast = secondLast.next
    }

    secondLast.next = null

    return head
  }

  const removeAtPosition = position => {
    if (position <= 0 || head === null) {
      removeHead()
    } else if (position >= getSize()) {
      removeTail()
    } else if (getSize() === 1) {
      head = null
    } else {
      let previous = head
      let current = head
      let index = 0

      while (index < position && current.next !== null) {
        previous = current
        current = current.next
        index++
      }

      previous.next = current.next
    }

    return head
  }

  const findIndexByData = data => {
    if (head === null) return

    let index = 0
    let current = head

    while (current !== null) {
      if (data === current.data) {
        return index
      }
      index++
      current = current.next
    }

    return null
  }

  const getHead = () => {
    return head.data
  }

  const getTail = () => {
    if (head === null) return head

    let tail = head

    while (tail.next !== null) {
      tail = tail.next
    }

    return tail
  }

  const getSize = () => {
    if (head === null) return

    let count = 0
    let current = head

    while (current !== null) {
      count++
      current = current.next
    }

    return count
  }

  const printLinkedList = () => {
    if (head === null) return

    let current = head

    while (current !== null) {
      console.log(current.data)
      current = current.next
    }
  }

  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
    findIndexByData,
    getHead,
    getTail,
    getSize,
    printLinkedList,
  }
}

// Setting linked list
const numberLinkedList = createLinkedList()

// Import data
numberLinkedList.insertHead(20)
numberLinkedList.insertHead(15)
numberLinkedList.insertHead(10)
numberLinkedList.insertHead(5)
numberLinkedList.insertTail(25)
numberLinkedList.insertBeforePosition(13, 2) // 5-->10-->13-->15-->20-->25-->null

numberLinkedList.printLinkedList() // 5-->10-->13-->15-->20-->25-->null

const findIndexByData = numberLinkedList.findIndexByData(10)
console.log(findIndexByData) // 1
