const numberList = [5, 2, 7, 3, 9, 4, 2, 5, 3, 3, 6, 7, 10]

const bubbleSort = numberList => {
  if (!Array.isArray(numberList) || numberList.length === 0)
    return numberList || []

  for (let i = numberList.length - 1; i > 0; i--) {
    console.log(numberList)
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        //swap
        [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]]
      }
    }
  }

  return numberList
}

console.log(bubbleSort(numberList))
