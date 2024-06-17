export function getRandomNumber(min: number, max: number): number {
  // Ensure min is less than or equal to max
  if (min > max) {
    [min, max] = [max, min];
  }

  const randomDecimal = Math.random();

  const range = max - min;
  const randomNumber = randomDecimal * range + min;

  return Math.floor(randomNumber);
}
