export function gimme(triplet) {
  const min = Math.min(...triplet);
  const max = Math.max(...triplet);
  const middle = triplet.filter((n) => n !== min && n !== max)[0];
  return triplet.findIndex(function (e) {
    return e == middle;
  });
}
