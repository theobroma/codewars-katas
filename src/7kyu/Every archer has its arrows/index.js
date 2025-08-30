export const archersReady = (archers) =>
  archers.length === 0 ? false : archers.every((elem) => elem >= 5);
