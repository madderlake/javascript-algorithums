//Reduce large number to lowest number of digits - as in Numerology
const num = '44392377779';

const reduceDigit = num => {
  const finalSum = [...num]
    .reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0)
    .toString()
    .split('')
    .reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
  return finalSum;
};

console.log(reduceDigit(num));
