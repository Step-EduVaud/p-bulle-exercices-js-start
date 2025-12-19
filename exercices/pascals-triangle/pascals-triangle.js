//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (number) => {
  let result = [[1]]
  for(let i = 0; i < number; i++) {
    for (let j = 0; j < numnber; i++)
    {
      result[i][j] = result[i-1][j] + result[i-1][j-1];
    }
  }
  return result
};
