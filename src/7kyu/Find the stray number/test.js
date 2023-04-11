import { stray } from '.';

test('Find the stray number', () => {
  expect(stray([1, 1, 2])).toBe(2);
});

test('Find the stray number', () => {
  expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
});
