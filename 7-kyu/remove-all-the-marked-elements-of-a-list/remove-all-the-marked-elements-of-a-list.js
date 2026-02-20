Array.prototype.remove_ = function(integer_list, values_list){
  // make solutions array
  const newArray = []
  
  // for each element in integer_list, go through values_list
  integer_list.filter(num => {
  // if integer_list number isn't in values_list, push it to solutions array
    if (!values_list.includes(num)) {
      newArray.push(num)
    }
  })
​
  //   console.log("newArray", newArray)
  return newArray
}