function accum(s) {
  // initialize variable to hold accumulated string
  let accumulated = ""
  
  // loop through string
  for (let i = 0; i < s.length; i++) {
    // for each letter, add lowercase letter * (iteration number + 1) & 
    // capitalize first letter & add a dash to accumulated string
    let charsToAdd = s[i].repeat(i + 1).toLowerCase()
    charsToAdd = charsToAdd[0].toUpperCase() + charsToAdd.slice(1) + "-"
    accumulated += charsToAdd
  }  
  
    return accumulated.slice(0, accumulated.length-1)
}