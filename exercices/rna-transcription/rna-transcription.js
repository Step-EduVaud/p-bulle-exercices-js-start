//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotidesDNA) => {
  for (let i = 0; i < nucleotidesDNA.length; i++ ) {
  switch(nucleotidesDNA[i]) {
    case "C":
      return "G";
      break;
    case "G":
      return "C";
      break;
    case "T":
      return "A";
      break;
    case "A":
      return "U";
      break;
    default:
      return undefined;
  }
  }
};
