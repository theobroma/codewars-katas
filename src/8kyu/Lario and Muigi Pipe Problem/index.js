export function pipeFix(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  let arr = [];
  for (let i = min; i < max + 1; i++) {
    arr.push(i);
  }
  return arr;
}
