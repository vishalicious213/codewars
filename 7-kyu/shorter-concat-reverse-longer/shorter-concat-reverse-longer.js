function shorterReverseLonger(a,b){
  let shorter = ""
  let longer = ""
  
  a.length < b.length 
    ? (shorter = a, longer = b)
    : (shorter = b, longer = a)
  
  return `${shorter}${longer.split("").reverse().join("")}${shorter}`
}