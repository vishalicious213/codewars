//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = [":", ";"]
  const nose = ["", "-", "~"]
  const mouth = [")", "D"]
  let count = 0
  
  arr.forEach(item => {
    if (item.length === 0 || item.length > 3) {
      return count
    }
    
    if (item.length === 2) {
      if (eyes.includes(item[0]) && mouth.includes(item[1])) {
        count++
      }
    }
    
    if (item.length === 3) {
      if (eyes.includes(item[0]) && nose.includes(item[1]) && mouth.includes(item[2])) {
        count++
      }
    }
  })
​
  return count;
}