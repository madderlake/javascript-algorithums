const str = 'I do not like the coronavirus pandemic';

// Find the length of the longest word
const findLongestWordLength = str => {
  let maxVal = 0;
  const wordArr = str.split(' ');
  //console.log(wordArr);
  wordArr.forEach(word => {
    if (word.length > maxVal) {
      maxVal = word.length;
    }
  });

  //Find the longest word
  const longest = str
    .split(' ')
    .reduce((a, b) => (a.length > b.length ? a : b), '');

  return {word: longest, length: maxVal};
};

console.log(findLongestWordLength(str));
