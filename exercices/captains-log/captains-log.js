// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1000
  const max = 9999
  return "NCC-" + Math.round(Math.random() * (max-min) + min)
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000.0
  const max = 42000.0
  return Math.random() * (max - min) + min
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  var classPlanet = ['D','H','J','K','L','M','N','R','T','Y'];
  return classPlanet[Math.floor(Math.random() * (classPlanet.length - 0) + 0)]
}
