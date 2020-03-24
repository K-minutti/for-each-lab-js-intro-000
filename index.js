function iterativeLog(array) {
  array.forEach((element index)
  => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array = [1, 2, 3, 4]
  array.forEach(element)
  console.log(element) // we have to return the array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
