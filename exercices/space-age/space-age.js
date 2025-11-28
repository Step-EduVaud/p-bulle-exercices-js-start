//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, sec) => {
  const EARTH_YEAR_IN_SEC = 31557600

  if (planet == "mercury")
    return parseFloat((sec / (EARTH_YEAR_IN_SEC * 0.2408467)).toFixed(2))

 else if (planet == "venus")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 0.61519726)).toFixed(2))

 else if (planet == "earth")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 1)).toFixed(2))

 else if (planet == "mars")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 	1.8808158)).toFixed(2))

 else if (planet == "jupiter")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 11.862615)).toFixed(2))

 else if (planet == "saturn")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 29.447498)).toFixed(2))

 else if (planet == "uranus")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 	84.016846)).toFixed(2))

 else if (planet == "neptune")
  return  parseFloat((sec / (EARTH_YEAR_IN_SEC * 164.79132)).toFixed(2))

 else
  throw new Error("not a planet");
  
}
