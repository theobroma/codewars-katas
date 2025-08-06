import { firstNonConsecutive } from '.';

test('a simple example', () => {
  expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toEqual(6);
});

test('a simple example', () => {
  expect(firstNonConsecutive([3, 4, 5, 6, 7, 8, 9, 11])).toEqual(11);
});

test('all sequential', () => {
  expect(firstNonConsecutive([1, 2, 3, 4])).toEqual(null);
});
