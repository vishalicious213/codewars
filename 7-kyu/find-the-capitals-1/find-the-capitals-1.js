var capitals = function (word) {
  const letters = word.split("")
  const indices = []
  
  letters.forEach((letter, index) => {
    if (letter === letter.toUpperCase()) indices.push(index)
  })
  
  return indices
}