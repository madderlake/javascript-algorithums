function countLtrs(str) {
  var counts = {};
  str = str.replace(/[^A-Za-z]/g, '');
  console.log(str);
  // Misc vars
  var ch, i, count;

  // Loop through the string...
  for (i = 0; i < str.length; ++i) {
    // Get this character
    ch = str.charAt(i); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[ch];

    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
  }
  console.log(counts);
  return counts;
}

console.log(
  countLtrs(
    'I want to count the number of occurances of each char in this string'
  )
);
