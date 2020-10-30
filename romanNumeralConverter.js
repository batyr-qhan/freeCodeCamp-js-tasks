function convertToRoman (num) {
  let string = ''

  let numbsArr = num.toString().split('').map(function (e, i, a) {
    return e * Math.pow(10, a.length - i - 1)
  })

  let romanNumbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  for (let i = 0; i < numbsArr.length; i++) {
    switch (numbsArr[i].toString().length) {
      case 4:
        let firstDigit = +numbsArr[i].toString().charAt(0)
        let count = 0
        while (count !== firstDigit) {
          count++
          string += romanNumbers['1000']
        }
      case 3:
        if (numbsArr[i] === 500) {
          string += romanNumbers['500']
        } else if (numbsArr[i] >= 100 && numbsArr[i] < 400) {
          let firstDigit = +numbsArr[i].toString().charAt(0)
          let count = 0
          while (count !== firstDigit) {
            count++
            string += romanNumbers['100']
          }
        } else if (numbsArr[i] === 400) {
          string = string + romanNumbers['100'] + romanNumbers['500']
        } else if (numbsArr[i] > 500 && numbsArr[i] < 900) {
          string = string + romanNumbers['500']
          let extractVal = numbsArr[i] - 500
          let firstDigit = +extractVal.toString().charAt(0)
          let count = 0
          while (count !== firstDigit) {
            count++
            string += romanNumbers['100']
          }
        } else if (numbsArr[i] === 900) {
          string = string + romanNumbers['100'] + romanNumbers['1000']
        }
      case 2:
        if (numbsArr[i] === 50) {
          string += romanNumbers['50']
        } else if (numbsArr[i] >= 10 && numbsArr[i] < 40) {
          let firstDigit = +numbsArr[i].toString().charAt(0)
          let count = 0
          while (count !== firstDigit) {
            count++
            string += romanNumbers['10']
          }
        } else if (numbsArr[i] === 40) {
          string = string + romanNumbers['10'] + romanNumbers['50']
        } else if (numbsArr[i] > 50 && numbsArr[i] < 90) {
          string = string + romanNumbers['50']
          let extractVal = numbsArr[i] - 50
          let firstDigit = +extractVal.toString().charAt(0)
          let count = 0
          while (count !== firstDigit) {
            count++
            string += romanNumbers['10']
          }
        } else if (numbsArr[i] === 90) {
          string = string + romanNumbers['10'] + romanNumbers['100']
        }
      case 1: if (numbsArr[i] === 5) {
        string += romanNumbers['5']
      } else if (numbsArr[i] >= 1 && numbsArr[i] < 4) {
        let firstDigit = +numbsArr[i].toString().charAt(0)
        let count = 0
        while (count !== firstDigit) {
          count++
          string += romanNumbers['1']
        }
      } else if (numbsArr[i] === 4) {
        string = string + romanNumbers['1'] + romanNumbers['5']
      } else if (numbsArr[i] > 5 && numbsArr[i] < 9) {
        string = string + romanNumbers['5']
        let extractVal = numbsArr[i] - 5
        let firstDigit = +extractVal.toString().charAt(0)
        let count = 0
        while (count !== firstDigit) {
          count++
          string += romanNumbers['1']
        }
      } else if (numbsArr[i] === 9) {
        string = string + romanNumbers['1'] + romanNumbers['10']
      }
    }
  }

  console.log(string)
  return string
}

convertToRoman(3996)
