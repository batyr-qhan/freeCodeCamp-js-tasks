function checkCashRegister (price, cash, cid) {

  const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'
  const CLOSED = 'CLOSED'
  const OPEN = 'OPEN'

  let result = {
    status: null,
    change: []
  }
  const cur = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DOLLAR', value: 1 },
    { name: 'FIVE', value: 5 },
    { name: 'TEN', value: 10 },
    { name: 'TWENTY', value: 20 },
    { name: 'ONE HUNDRED', value: 100 }
  ]

  let changeAmount = cash - price

  while (changeAmount > 0) {
    for (let i = 0; i < cid.length; i++) {
      for (let j = 0; j < cur.length; j++) {
        if (cid[i][0] === cur[j].name
          && changeAmount > 0
          && changeAmount >= cur[j].value
          && changeAmount < cur[j + 1].value) {

          let arr = []
          arr.push(cur[j].name, cur[j].value)

          console.log(arr)
          changeAmount -= cur[j].value

          if (!result.change.length) {
            result.change.push(arr)
          } else {
            if (result.change[result.change.length - 1][0] !== arr[0]) {
              result.change.push(arr)
            } else {
              result.change[result.change.length - 1][1] += arr[1]
            }
          }
        }
      }
    }
  }

  console.log(result)

  return result
}

checkCashRegister(19.5, 30, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]])