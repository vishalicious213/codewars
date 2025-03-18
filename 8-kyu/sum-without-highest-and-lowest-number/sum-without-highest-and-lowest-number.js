function sumArray(array) {
  if (array === null || array === undefined || array.length === 0 || array.length <= 2) return 0
  
  let nums = array.sort(function(a,b){return a-b})
  nums.splice(0, 1)
  nums.splice((array.length-1), 1)
  return nums.reduce((total, num) => total + num, 0)
}