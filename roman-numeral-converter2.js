function convertToRoman(num) {
  const symbols = {
    1: {
      baseMarker: 'I',
      midMarker: 'V',
      highMarker: 'X'
    },
    10: {
      baseMarker: 'X',
      midMarker: 'L',
      highMarker: 'C'
    },
    100: {
      baseMarker: 'C',
      midMarker: 'D',
      highMarker: 'M'
    },
    1000: {
      baseMarker: 'M',
      midMarker: 'ↁ',
      highMarker: 'ↂ'
    }
  };
  const numArr = num.toString().split('');
  const len = numArr.length;
  let romanStr = [];

  numArr
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
    .map(obj => {
      for (let value in obj) {
        const {baseMarker, midMarker, highMarker} = obj[value];
        value = parseInt(value);

        value < 4 && romanStr.push(baseMarker.repeat(value));
        value === 4 && romanStr.push(baseMarker + midMarker);
        value === 5 && romanStr.push(midMarker);
        value > 5 &&
          value < 9 &&
          romanStr.push(midMarker + baseMarker.repeat(value - 5));
        value === 9 && romanStr.push(baseMarker + highMarker);
      }
    });
  return romanStr.join('');
}

console.log(convertToRoman(608));
