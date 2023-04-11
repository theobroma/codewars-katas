import { smallEnough } from '.';

test('Small enough', () => {
  expect(smallEnough([66, 101], 200)).toBe(true);
});

test('Small enough', () => {
  expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false);
});

test('Small enough', () => {
  expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true);
});

test('Small enough', () => {
  expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true);
});
