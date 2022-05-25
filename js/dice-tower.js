// sample isohedrals

// Utility functions
// Test if the number of faces match a valid physical die
const isIsohedral = (faces) => {
  const allowedFaces = [2,4,6,8,10,12,16,20,100];

  return allowedFaces.includes(parseInt(faces))
}

// 

// TODO: Add support for verbose results and `return` an object instead of an integer.

const drop = (hand) => {
  // This function only supports args that are integers, strings and arrays
  if (!Number.isInteger(hand) && !Array.isArray(hand) && typeof hand !== 'string') return null;

  // integer -> simple die
  if (Number.isInteger(hand)) {
    // bad isoheral (ex. 5-sided die)
    if (!isIsohedral(hand)) return null;

    // good isohedral
    return (Math.floor(Math.random() * hand)) + 1;
  }

  // string in D&D dice notation
  if (typeof hand === 'string') {
    const notationMatch = hand.match(/^(\d*)d(\d+)$/);
    // no match (null)
    if (typeof notationMatch === "object" && !notationMatch) return null;
    // not an accepted isohedral die
    if (!isIsohedral(notationMatch[2])) return null;

    // 'd6' -> roll one die
    // TODO: Move duplicate code to a `randDieFace(faces)` when `faces` is an integer.
    if (!notationMatch[1]) return Math.floor(Math.random() * notationMatch[2]) + 1;
    
    // roll multiple dice of the same type
    let resultDetails = [];
    for (let i = 0; i < notationMatch[1] ;i++) {
      resultDetails[resultDetails.length] = Math.floor(Math.random() * notationMatch[2]) + 1
    }
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
      return (Math.floor(Math.random() * die)) + 1      
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