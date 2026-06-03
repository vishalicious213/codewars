// write the function isAnagram
var isAnagram = function(test, original) {
  let sorted1 = test.toLowerCase().split("").sort().join("")
  let sorted2 = original.toLowerCase().split("").sort().join("")
  
  return sorted1 === sorted2
};
​