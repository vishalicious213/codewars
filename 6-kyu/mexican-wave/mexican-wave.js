function wave(str){
  let waveArr = []
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue
    
    let upper = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
    waveArr.push(upper)
  }
  
  return waveArr
}