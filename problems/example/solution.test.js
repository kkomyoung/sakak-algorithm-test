const { twoSum } = require('./solution');

describe('twoSum', () => {
  test('기본 케이스: [2, 7, 11, 15]에서 합이 9가 되는 인덱스', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('중간 위치: [3, 2, 4]에서 합이 6이 되는 인덱스', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('같은 값: [3, 3]에서 합이 6이 되는 인덱스', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('음수 포함: [-1, -2, -3, -4, -5]에서 합이 -8이 되는 인덱스', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});