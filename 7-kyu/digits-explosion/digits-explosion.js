function explode(s) {
  let output = ""
  
  s.split("").forEach(num => {
    for (let x = 0; x < parseInt(num); x++) {
      output+= num
    }
  })
  
  return output
}