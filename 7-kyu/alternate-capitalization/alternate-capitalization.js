function capitalize(s){
  let evens = s.split("")
  let odds = s.split("")
  
  evens.forEach((letter, index) => {
    if (index % 2 === 0) evens[index] = letter.toUpperCase()
  })
  
  odds.forEach((letter, index) => {
    if (index % 2 === 1) odds[index] = letter.toUpperCase()
  })
  
  return [evens.join(""), odds.join("")]
}