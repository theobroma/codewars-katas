export function stray(numbers) {
  const uniq = [...new Set(numbers)];
  const firstNumCount = numbers.reduce(
    (count, item) => count + (item == uniq[0]),
    0
  );
  return firstNumCount > 1 ? uniq[1] : uniq[0];
}

//  Alt
// export function stray(numbers) {
//   const sum = numbers.reduce((x, y) => {
//     console.log("x", x);
//     console.log("y", y);
//     console.log("x^y", x ^ y);
//     return x ^ y;
//   });
//   console.log("sum", sum);
//   return sum;
// }
