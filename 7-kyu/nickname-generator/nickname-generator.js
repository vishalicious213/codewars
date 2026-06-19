function nicknameGenerator(name){
  const vowels = ["a", "e", "i", "o", "u"]
  
  if (name.length < 4) return "Error: Name too short"
  
  if (vowels.includes(name[2])) return name.slice(0, 4)
  
  if (!vowels.includes(name[2])) return name.slice(0, 3)
}