function sortMyString(s) {
  let evens = ""
  let odds = ""
  const chars = s.split("")
  
  chars.forEach((char, index) => index % 2 === 0 ? evens += char : odds += char)
  
  return `${evens} ${odds}`
}