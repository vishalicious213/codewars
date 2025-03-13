function comp(array1, array2){
  if (array1 === null || array2 === null) {
    return false
  }
  
  if (array1.length === 0 && array2.length === 0) {
    return true
  }
  
  if (array1.length === 0 || array2.length === 0) {
    return false
  }
  
  array1.forEach(num => {
    if (array2.includes(num * num)) {
      array2.splice(array2.indexOf(num * num), 1)
    }
  })
  
  if (array2.length === 0) {
    return true
  } else {
    return false
  }  
}