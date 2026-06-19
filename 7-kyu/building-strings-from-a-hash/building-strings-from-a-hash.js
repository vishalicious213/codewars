function solution(pairs){
  const readablePairs = []
  
  for (const [key, value] of Object.entries(pairs)) {
    readablePairs.push(`${key} = ${value}`)
  }
  
  return readablePairs.join(",")
}