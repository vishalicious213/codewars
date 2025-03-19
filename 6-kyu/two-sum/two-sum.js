function twoSum(numbers, target) {
  for (let i = numbers.length; i >= 0; i--) {
    let diff = target - numbers[i]
    if (numbers.includes(diff)) {
      return [i, numbers.indexOf(diff)]
    }
  }
}