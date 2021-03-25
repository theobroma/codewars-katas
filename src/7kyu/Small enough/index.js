export function smallEnough(a, limit) {
  function isSmallEnough(element, index, array) {
    return element <= limit;
  }
  return a.every(isSmallEnough);
}
