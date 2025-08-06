export function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0] + i) {
      return arr[i];
    }
  }
  return null;
}
