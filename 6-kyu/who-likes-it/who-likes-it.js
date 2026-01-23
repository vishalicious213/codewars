// Parameters: array of names
// Returns: text
​
function likes(names) {
  // Get # of elements in array
  let numOfLikes = names.length
  // Make conditional based on # of elements
    // see examples for what to return
    // 4+: first 2 names & count of remainder
  if (numOfLikes === 0) return "no one likes this"
  
  if (numOfLikes === 1) return `${names[0]} likes this`
  
  if (numOfLikes === 2) return `${names[0]} and ${names[1]} like this`
​
  if (numOfLikes === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
​
  if (numOfLikes > 3) return `${names[0]}, ${names[1]} and ${numOfLikes - 2} others like this`
}