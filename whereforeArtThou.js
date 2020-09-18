function whatIsInAName (collection, source) {
  var arr = []
  // Only change code below this line

  // collection.map(item => console.log(JSON.stringify(item) === JSON.stringify(source)))

  const srcKeys = Object.keys(source)



  // Only change code above this line
  return arr
}

console.log(whatIsInAName([{ 'apple': 1, 'bat': 2 }, { 'bat': 2 }, { 'apple': 1, 'bat': 2, 'cookie': 2 }], {
  'apple': 1,
  'bat': 2
}))