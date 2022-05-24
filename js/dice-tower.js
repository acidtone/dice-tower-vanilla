// sample isohedrals
const allowedFaces = [2,4,6,8,10,12,16,20,100];

const drop = (hand) => {
  if (!Number.isInteger(hand) && !Array.isArray(hand)) return null;

  // integer -> simple die
  if (Number.isInteger(hand)) {
    // bad isoheral (ex. 5-sided die)
    if (!allowedFaces.includes(hand)) return null;

    // good isohedral
    return (Math.floor(Math.random() * hand)) + 1;
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
      if (!allowedFaces.includes(die)) return null;

      // good isohedral
      return (Math.floor(Math.random() * die)) + 1      
    })

    // return sum
    return resultDetails.reduce((prevValue, currValue) => {
      return prevValue + currValue;
    })
  }

  return "uh oh"

};

export default drop;