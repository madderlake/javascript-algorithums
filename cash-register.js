function checkCashRegister(price, cash, cid) {
  // var change;
  let status = {status: null, change: []};
  //subtract price from cash to get change amount
  let change = cash - price;
  console.log('Change Needed:' + change);

  const denoms = [
    {name: 'ONE HUNDRED', val: 100},
    {name: 'TWENTY', val: 20},
    {name: 'TEN', val: 10},
    {name: 'FIVE', val: 5},
    {name: 'ONE', val: 1},
    {name: 'QUARTER', val: 0.25},
    {name: 'DIME', val: 0.1},
    {name: 'NICKEL', val: 0.05},
    {name: 'PENNY', val: 0.01}
  ];

  const register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    {total: 0}
  );

  if (register.total < change) {
    status.status = 'INSUFFICIENT_FUNDS';
    return status;
  }
  if (register.total === change) {
    status.status = 'CLOSED';
    status.change = cid;
    return status;
  }

  var changeArr = denoms.reduce((acc, curr) => {
    var value = 0;

    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);

  if (changeArr.length < 1 || change > 0) {
    status.status = 'INSUFFICIENT_FUNDS';
    return status;
  }

  status.status = 'OPEN';
  status.change = changeArr;
  return status;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.06],
    ['NICKEL', 0.15],
    ['DIME', 0.7],
    ['QUARTER', 1.25],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
  ])
);
