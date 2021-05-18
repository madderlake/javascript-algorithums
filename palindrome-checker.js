function palindrome(str) {
  //Convert string to lower case & replace non-alphanumeric chars
  let arr1 = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
  //Take that string, make it an array, reverse it and join it back to str
  let arr2 = arr1.split('').reverse().join('');
  //Compare strings
  return arr1 === arr2;
}

console.log(palindrome('0_0 (: /- :) 0-0'));
