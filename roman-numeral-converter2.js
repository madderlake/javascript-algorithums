function convertToRoman(num) {
  const symbols = {
    1: {
      baseSymbol: 'I',
      midSymbol: 'V',
      highSymbol: 'X'
    },
    10: {
      baseSymbol: 'X',
      midSymbol: 'L',
      highSymbol: 'C'
    },
    100: {
      baseSymbol: 'C',
      midSymbol: 'D',
      highSymbol: 'M'
    },
    1000: {
      baseSymbol: 'M',
      midSymbol: 'ↁ',
      highSymbol: 'ↂ'
    }
  };
  const numArr = num.toString().split('');
  const len = numArr.length;

  const romanStr = numArr
    .map((num, i) => {
      if (num === 0) return;
      return (
        num +
        Array(len - i - 1)
          .fill(0)
          .join('')
      );
    })
    .map(part => {
      const strVal = part.toString();
      const partLen = strVal.length - 1;

      const partObj = {
        base: Math.pow(10, partLen).toString(),
        value: parseInt(strVal[0])
      };
      for (let key in symbols) {
        if (partObj.base === key.toString())
          return {[partObj.value]: symbols[key]};
      }
    })
    .reduce((acc, curr) => {
      for (let value in curr) {
        const {baseSymbol, midSymbol, highSymbol} = curr[value];
        value = parseInt(value);
        if (!acc) acc = [];
        value < 4 && acc.push(baseSymbol.repeat(value));
        value === 4 && acc.push(baseSymbol + midSymbol);
        value === 5 && acc.push(midSymbol);
        value > 5 &&
          value < 9 &&
          acc.push(midSymbol + baseSymbol.repeat(value - 5));
        value === 9 && acc.push(baseSymbol + highSymbol);
      }
      return acc;
    }, [])
    .join('');

  return romanStr;
}

console.log(convertToRoman(608));
