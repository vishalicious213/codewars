function switcheroo(x){
  let letters = x.split("")
  
  letters.forEach((letter, index) => 
    letter === "a" ? letters[index] = "b" : 
    letter === "b" ? letters[index] = "a" : 
    null)
  
  return letters.join("")
}