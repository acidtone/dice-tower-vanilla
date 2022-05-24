const allowedFaces = [2,4,6,8,10,12,16,20,100];

const roll = (dice) => {
  if (!Number.isInteger(dice) && !Array.isArray(dice)) return null

  if (Number.isInteger(dice)) {
    if (!allowedFaces.includes(dice)) return null
    return "Good Int"
  }
  
  if (Array.isArray(dice)) {
    if (dice.length < 1) return null
    return "Good Array"
  }

  return "uh oh"

};

export default roll;