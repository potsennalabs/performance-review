/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {
  return [...cards.slice(2, 6), ...cards];
}
