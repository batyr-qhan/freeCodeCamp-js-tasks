function confirmEnding(str, target) {
  let filtered = str.split('').slice(str.length - target.length).join('')

  return (filtered === target) ? true : false
}

confirmEnding("Bastian", "ian");
