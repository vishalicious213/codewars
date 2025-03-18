function isValidWalk(walk) {
  if (walk.length !== 10) return false
  
  let n = walk.filter(item => item === "n").length
  let e = walk.filter(item => item === "e").length
  let w = walk.filter(item => item === "w").length
  let s = walk.filter(item => item === "s").length
  
  if (n === s && e === w) {
    return true
  } else {
    return false
  }
}