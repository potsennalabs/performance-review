export function isPrime(num) {
  if (num === 1) return false;

  const round = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= round; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
