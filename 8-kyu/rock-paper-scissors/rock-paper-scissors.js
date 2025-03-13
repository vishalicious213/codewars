const rps = (p1, p2) => {
  const winner1 = "Player 1 won!"
  const winner2 = "Player 2 won!"
  const draw = "Draw!"
  
  console.log(p1, p2)
  
  if (p1 === p2) {
    return draw
  }
​
  if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
    return winner1
  }
  
  if (p2 === "rock" && p1 === "scissors" || p2 === "scissors" && p1 === "paper" || p2 === "paper" && p1 === "rock") {
    return winner2
  }
};