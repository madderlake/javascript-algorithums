function convertToRoman(num) {
  const denoms = {
    one: { sym: 'I' },
    five: { sym: 'V' },
    ten: { sym: 'X' },
    fifty: { sym: 'L' },
    hundred: { sym: 'C' },
    five_hundred: { sym: 'D' },
    thousand: { sym: 'M' },
    five_thousand: { sym: 'ↁ' },
    ten_thousand: { sym: 'ↂ' }
  };
  const numstr = num.toString().split('');
  const len = numstr.length;
  let base = 0;
  let value = 0;
  let romanStr = '';
  let baseMarker, midMarker, highMarker;
  const parts = numstr
    .map((n, i) => {
      return (
        n +
        Array(len - i - 1)
          .fill(0)
          .join('')
      );
    })
    .map(Number)
    .filter(num => num !== 0);
  for (let i = 0; i < parts.length; i++) {
    let partLen = parts[i].toString().length - 1;
    base = Math.pow(10, partLen).toString();
    value = parseInt(parts[i].toString()[0]);
    if (base == 1000) {
      baseMarker = denoms.thousand.sym;
      midMarker = denoms.five_thousand.sym;
      highMarker = denoms.ten_thousand.sym;
    }
    if (base == 100) {
      baseMarker = denoms.hundred.sym;
      midMarker = denoms.five_hundred.sym;
      highMarker = denoms.thousand.sym;
    }
    if (base == 10) {
      baseMarker = denoms.ten.sym;
      midMarker = denoms.fifty.sym;
      highMarker = denoms.hundred.sym;
    }
    if (base == 1) {
      baseMarker = denoms.one.sym;
      midMarker = denoms.five.sym;
      highMarker = denoms.ten.sym;
    }

    if (value < 4) romanStr += baseMarker.repeat(value);
    if (value == 4) romanStr += baseMarker + midMarker;
    if (value == 5) romanStr += midMarker;
    if (value > 5 && value < 9)
      romanStr += midMarker + baseMarker.repeat(value - 5);
    if (value == 9) romanStr += baseMarker + highMarker;
  }
  return romanStr;
}

console.log(convertToRoman(29));
