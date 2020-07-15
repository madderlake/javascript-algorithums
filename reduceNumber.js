//Reduce large number to lowest number of digits - as in Numerology
const id = '44392377779';
let sum = 0;

const reduceDigit = id => {
  //make number into array & iterate adding items as numbers
  [...id].forEach(item => {
    //add up all the numbers in the array
    sum += parseInt(item);
  });
  //turn the total back into a string, then an array using spread operator
  //add the digits in the total - ie reduce it to one number
  sum = [...sum.toString()].reduce((a, b) => {
    //convert items in array back to numbers
    return parseInt(a) + parseInt(b);
  }, 0);
  return sum;
};

console.log(reduceDigit(id));
