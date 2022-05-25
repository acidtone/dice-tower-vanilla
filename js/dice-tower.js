// sample isohedrals

// Utility functions
// Test if the number of faces match a valid physical die
const isIsohedral = (faces) => {
  const allowedFaces = [2,4,6,8,10,12,16,20,100];

  return allowedFaces.includes(parseInt(faces))
}

// Roll die
const randomDieFace = (faces) => {
  faces = parseInt(faces);
  // If `faces` is integer, return random number R in range {1-faces}
  if (!Number.isInteger(faces)) return null;
  return Math.ceil(Math.random() * faces);
}

// TODO: Add support for verbose results and `return` an object instead of an integer.

const drop = (hand) => {
  // This function only supports args that are integers, strings and arrays
  if (!Number.isInteger(hand) && !Array.isArray(hand) && typeof hand !== 'string') return null;

  // integer -> simple die
  if (Number.isInteger(hand)) {
    // bad isoheral (ex. 5-sided die)
    if (!isIsohedral(hand)) return null;

    // good isohedral
    return randomDieFace(hand);
  }

  // string in D&D dice notation
  if (typeof hand === 'string') {
    const notationMatch = hand.match(/^(\d*)d(\d+)$/);
    // no match (null)
    if (typeof notationMatch === "object" && !notationMatch) return null;
    // not an accepted isohedral die
    if (!isIsohedral(notationMatch[2])) return null;

    // 'd6' -> roll one die
    if (!notationMatch[1]) return randomDieFace(notationMatch[2]);
    
    // roll multiple dice of the same type
    let resultDetails = [];
    for (let i = 0; i < notationMatch[1] ;i++) {
      resultDetails[resultDetails.length] = randomDieFace(notationMatch[2])
    }
    console.log(notationMatch);
    console.log(resultDetails);
    return resultDetails.reduce((prevValue, currValue) => {
      return prevValue + currValue;
    })
  }

  // array -> everything else
  if (Array.isArray(hand)) {
    // empty
    if (!hand.length) return null;

    // array of integers -> hand of simple dice
    hand.forEach((die) => {
      if (!Number.isInteger(die)) return null;
    })

    // roll die
    const resultDetails = hand.map((die) => {
      // bad isoheral (ex. 5-sided die)
      if (!isIsohedral(die)) return null;

      // good isohedral
      return randomDieFace(die);      
    })
    console.log(resultDetails);

    // return sum
    return resultDetails.reduce((prevValue, currValue) => {
      return prevValue + currValue;
    })

    // TODO: Add support for an array of integers or rpg strings!

  }

  return "uh oh"

};

export default drop;