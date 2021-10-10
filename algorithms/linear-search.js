const findIndexByTarget = (numberList, target) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === target) return i
  }

  return -1
}

// O(n)
console.log(findIndexByTarget([1, 2, 3, 4, 5, 6], 3)) // 2
