const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numberList.sort((a, b) => a - b)

// Recursion
const binarySearchTypeRecursion = (numberList, target, left, right) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1

  if (right < left) return -1

  const mid = left + Math.trunc((right - left) / 2)
  if (numberList[mid] === target) return mid

  if (target > numberList[mid])
    return binarySearchTypeRecursion(numberList, target, mid + 1, right)

  return binarySearchTypeRecursion(numberList, target, left, mid - 1)
}

const binarySearchTypeLoop = (numberList, target) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1

  let left = 0
  let right = numberList.length - 1

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2)

    if (numberList[mid] === target) return mid

    if (target > numberList[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

// O(log(n))
console.log(binarySearchTypeRecursion(numberList, 3, 0, numberList.length - 1)) //2
console.log(binarySearchTypeLoop(numberList, 9)) //8
