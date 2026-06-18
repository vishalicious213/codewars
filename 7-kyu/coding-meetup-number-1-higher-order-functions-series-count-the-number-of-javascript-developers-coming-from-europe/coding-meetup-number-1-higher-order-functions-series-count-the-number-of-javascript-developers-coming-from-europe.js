function countDevelopers(list) {
  return list.reduce((acc, person) => 
    person.continent === "Europe" && 
    person.language === "JavaScript"
    ? acc + 1
    : acc,
  0)
}