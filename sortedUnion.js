function uniteUnique(...args) {
  let resultarr = args.flat()

  return resultarr.filter((item, index) => resultarr.indexOf(item) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));