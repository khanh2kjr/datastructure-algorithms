/**
 * Queue
 * First in - First out
 * ---------
 * 5 4 3 2 1 ->
 * ---------
 */

const createQueue = () => {
  const queue = []

  const getFront = () => {
    return queue.length > 0 ? queue[queue.length - 1] : null
  }

  const getBack = () => {
    return queue.length > 0 ? queue[0] : null
  }

  const getSize = () => {
    return queue.length
  }

  const enqueue = data => {
    queue.unshift(data)
  }

  const dequeue = () => {
    return queue.pop()
  }

  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
  }
}
