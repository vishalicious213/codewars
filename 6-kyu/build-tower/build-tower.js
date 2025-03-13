function towerBuilder(nFloors) {
  if (nFloors < 1) return
  let tower = []
  
  for (let i = 1; i <= nFloors; i++) {
    let stars = "*".repeat(i + (i - 1))
    let spaces = " ".repeat(nFloors - i)
    tower.push(spaces + stars + spaces)
  }
​
  return tower
}
​