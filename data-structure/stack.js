/**
 * Stack
 * Last in - First out
 * |5|
 * |4|
 * |3|
 * |2|
 * |1|
 */

const createStack = () => {
  const stack = []

  const getTop = () => {
    return stack.length > 0 ? stack[0] : null
  }

  const getSize = () => {
    return stack.length
  }

  const isEmpty = () => {
    return stack.length === 0
  }

  const push = data => {
    stack.unshift(data)
  }

  const pop = () => {
    return stack.shift()
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  }
}
