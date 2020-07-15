const isAnagram = (str1, str2) => {
  //Create array for iteration
  let a1 = [...str1];
  let a2 = [...str2];
  //Compare length - if not equal - we’re done!
  if (a1.length !== a2.length) {
    return false;
  }
  //Sort the array and turn it back into a string
  a1 = a1.sort().join('');
  a2 = a2.sort().join('');
  //Compare the string!
  return a1 === a2 ? true : false;
};

console.log(isAnagram('adobe', 'abode'));
