function getCount(str) {
  let count = 0
  
  for (const char of str) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      count++
    }
  }
  
  return count
}