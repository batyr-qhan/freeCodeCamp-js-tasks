function checkCashRegister (price, cash, cid) {

  const cur = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'ONE', value: 1 },
    { name: 'FIVE', value: 5 },
    { name: 'TEN', value: 10 },
    { name: 'TWENTY', value: 20 },
    { name: 'ONE HUNDRED', value: 100 }
  ]

  let changeAmount = cash - price

  let resultObj = {
    status: '',
    change: []
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    for (let j = 0; j < cur.length; j++) {
      if (cid[i][0] === cur[j].name) {
        cid[i][0] = cur[j].value
      }
    }
  }

  let count = 0

  for (let i = cid.length - 1; i >= 0; i--) {
    if (changeAmount > cid[i][0] && changeAmount === cid[i][1]) {
      while (count.toFixed(1) !== changeAmount.toFixed(1)) {
        count += cid[i][0]
      }
      changeAmount = changeAmount - cid[i][1]
      resultObj.status = 'CLOSED'
      resultObj.change = cid
    } else {
      count = 0
      while (changeAmount >= cid[i][0] && cid[i][1]) {
        cid[i][1] -= cid[i][0]
        changeAmount = changeAmount.toFixed(2) - cid[i][0]
        count += cid[i][0]
      }
      resultObj.status = 'OPEN'
      if (count) {
        resultObj.change.push([cid[i][0], count])
      }
    }
  }

  resultObj.change.map(item => {
    for (let j = 0; j < cur.length; j++) {
      if (item[0] === cur[j].value) {
        item[0] = cur[j].name
      }
    }
  })
  if (!changeAmount) {
    return resultObj
  } else {
    resultObj.status = 'INSUFFICIENT_FUNDS'
    resultObj.change = []
    return resultObj
  }

}

console.log(checkCashRegister(19.5, 20,
  [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))

// console.log(checkCashRegister(3.26, 100,
//   [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]))

// console.log(checkCashRegister(19.5, 20,
//   [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))