// @flow

const { wordToNumber, wordsToNumber } = require('./wordToNumber');

describe('wordToNumber', () => {
  test('it returns a number', () => {
    expect(wordToNumber('10')).toEqual(10);
  });

  test('it returns NaN when passing in a string', () => {
    expect(wordToNumber('abc')).toEqual(NaN);
  });
});

describe('wordsToNumber', () => {
  test('it returns an array of numbers', () => {
    expect(wordsToNumber(['1', '2', '3'])).toEqual([1, 2, 3]);
  });

  test('it returns an empty array', () => {
    expect(wordsToNumber(['a', 'b', 'c'])).toEqual([]);
  });
});
