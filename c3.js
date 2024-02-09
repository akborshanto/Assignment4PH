
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    let newArr = [];
    for (let number of array) {
      if (typeof number === "number" && !isNaN(number)) {
        newArr.push(number);
      }
    }
    return newArr;
  }
}
