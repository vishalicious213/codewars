function alphabetWar(fight) {
  const left = { w: 4, p: 3, b: 2, s: 1 }
  const right = { m: 4, q: 3, d: 2, z: 1 }
  let letters = [...fight]
  let leftPts = 0
  let rightPts = 0
  
  letters.forEach((letter) => {
    if (left[letter]) {
      leftPts += left[letter]
    }
    if (right[letter]) {
      rightPts += right[letter]
    } 
  })
  
  if (leftPts > rightPts) {
    return "Left side wins!"
  } else if (rightPts > leftPts) {
    return "Right side wins!"
  } else return "Let's fight again!"
}