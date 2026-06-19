function greetDevelopers(list) {
  list.forEach(item => {
    item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`
  })
  
  return list
}