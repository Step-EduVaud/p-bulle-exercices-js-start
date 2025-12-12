// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  var nbrCard = 0;
  stack.forEach((cards) => {
    if (cards == card)
      nbrCard++;
  })
  return nbrCard
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  var nbrCard = 0;
  for(let cards of stack)
  {
    if ( type)
    {
      if (cards % 2 == 1)
      continue  //Saute l'itération si cards est impair"
    }
    else if (cards % 2 == 0)
      continue  //Saute l'itération si cards est pair"
    nbrCard++
  }
  return nbrCard
}
