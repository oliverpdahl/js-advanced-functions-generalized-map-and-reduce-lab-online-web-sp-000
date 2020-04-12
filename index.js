// Add your functions here
function map(array, action){
  let newArray = []
  for(const num of array){
    newArray.push(action(num))
  }
  return newArray
}

function reduce(array, action, startingPoint = false){
  let value
  let pointer
  let newArray = [...array]
  if(startingPoint){
    value = startingPoint
    pointer = 0
  } else{
    value = newArray.shift()
    pointer = 1
  }
  for(pointer; pointer < array.length; pointer++){
    value = action(value, array[pointer])
  }
  return value
}