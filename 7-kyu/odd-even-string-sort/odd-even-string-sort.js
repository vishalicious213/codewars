function sortMyString(s) {
  let evens = ""
  let odds = ""
  const chars = s.split("")
  
  chars.forEach((char, index) => {
    if (index % 2 === 0) {
      evens += char
    } else {
      odds += char
    }
  })
  
  return `${evens} ${odds}`
}