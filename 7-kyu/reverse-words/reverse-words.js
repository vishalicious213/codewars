// Parameters: string
// Returns: string (reversed)
// Examples: "Hello world" -> "olleH dlrow"
// Pseudocode
​
function reverseWords(str) {
  // split the string on spaces
  let reversed = str.split(" ")
  // for each word, reverse the word -> reverse & join
  reversed = reversed.map(word => [...word].reverse().join("")).join(" ")
  // join back the words into a string
  return reversed
}