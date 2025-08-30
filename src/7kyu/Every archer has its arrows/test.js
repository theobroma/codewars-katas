import { archersReady } from '.';

test('Should handle no archers', () => {
  expect(archersReady([])).toEqual(false);
});

test('Should handle unprepared archers', () => {
  expect(archersReady([1, 2, 3, 4])).toEqual(false);
});

test('Should handle prepared archers', () => {
  expect(archersReady([5, 6, 7, 8])).toEqual(true);
});

test('Should handle mixed archers', () => {
  expect(archersReady([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(false);
});
