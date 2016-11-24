// @flow

const wordsToNumber = (words: Array<string>): Array<number> => {
  const transform = words.map(value => parseInt(value, 10)).filter(value => !!value);
  if (!transform) {
    return [];
  }

  return transform;
};
// wordsToNumber(['1', '2', '3']); // works
// wordsToNumber([1, 2, 3]); // flow shows warning
// wordsToNumber(['a', 'b', 'c']); // flow doesn't detect it
// (works because of the filter), otherwise -> unexpected result

const wordToNumber = (wordNumber: string): number => parseInt(wordNumber, 10);
// wordToNumber('10'); // works
// wordToNumber(10); // flow shows warning
// wordToNumber('abc'); // flow doesn't detect it but doesn't work on runtime (returns `NaN`)

// const wordToNumberNoFlow = wordNumber => parseInt(wordNumber, 10);
// wordToNumber(10); // works
// wordToNumber('10'); // works
// wordToNumber('abc'); // flow doesn't detect it but doesn't work on runtime (returns `NaN`)

module.exports = {
  wordToNumber,
  wordsToNumber,
};
