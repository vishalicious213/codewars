function divCon(x){
  return x.reduce((acc, num) =>
    typeof num === "string"
      ? acc - Number(num)
      : acc + num,
  0)
}