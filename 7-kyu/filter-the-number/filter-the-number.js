function filterString(value) {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const values = [...value]
  let savedNums = ""
  
  values.forEach(num => {
    if (nums.includes(num)) savedNums+=num
  })
  
  return parseInt(savedNums)
}