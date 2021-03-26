import { pipeFix } from ".";

test("Lario and Muigi Pipe Problem", () => {
  expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Lario and Muigi Pipe Problem", () => {
  expect(pipeFix([1, 2, 3, 12])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]);
});

test("Lario and Muigi Pipe Problem", () => {
  expect(pipeFix([6, 9])).toEqual([6, 7, 8, 9]);
});

test("Lario and Muigi Pipe Problem", () => {
  expect(pipeFix([-1, 4])).toEqual([-1, 0, 1, 2, 3, 4]);
});

test("Lario and Muigi Pipe Problem", () => {
  expect(pipeFix([1, 2, 3])).toEqual([1, 2, 3]);
});
