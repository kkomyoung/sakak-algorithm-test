const { solution1 } = require('../src/solutions/solution1');

const testCases = [
  { n: 5, expected: 12 },
  { n: 8, expected: 21 },
];

const solutions = [
  { name: 'solution1', fn: solution1 },
];

describe('개미수열 가운데 두 자리 테스트', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected }) => {
        test(`n=${n} → ${expected}`, () => {
          expect(fn(n)).toBe(expected);
        });
      });
    });
  });
});