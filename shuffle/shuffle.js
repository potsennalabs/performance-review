/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {
  const top = cards.slice(0, 15);
  const mid = cards.slice(15, 35);
  const bot = cards.slice(35);

  return [...bot, ...top, ...mid];
}
