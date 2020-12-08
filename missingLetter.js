function fearNotLetter(str) {
  let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let filtered = alphabetArr.splice(alphabetArr.indexOf(str.charAt(0)), str.length).filter(el => !str.includes(el))

  return filtered.length ? filtered.join('') : undefined
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
