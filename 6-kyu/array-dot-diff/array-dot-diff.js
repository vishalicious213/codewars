function arrayDiff(a, b) {
  let filteredArray = a
    
  for (let i = 0; i <= a.length; i++) {
    if (b.includes(a[i])) {
        filteredArray = filteredArray.filter(item => item !== a[i])
    }
  }
  
  return filteredArray
}