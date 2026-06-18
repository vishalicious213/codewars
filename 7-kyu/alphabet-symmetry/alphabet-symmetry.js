function solve(arr){  
  let matches = []
  
  arr.forEach((word) => {
    let match = 0
    
    for (let i = 0; i < word.length; i++) {
      if (word.toLowerCase().charCodeAt(i) - 96 === i + 1) {
        match++
      }
    }
      matches.push(match)
  })
  
  return matches
}