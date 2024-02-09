function checkName(name) {
    
  if (typeof name !== "string") {
    return "invalid";
  }

  let res = name.slice(-1);
  if (res === "a") {
    return "Good Name";
  } else if (res === "y") {
    return "bad anme";
  } else if (res === "i") {
    return "Good Name";
  } else if (res === "e") {
    return "Good Name";
  } else if (res === "o") {
    return "Good Name";
  } else if (res === "u") {
    return "Good Name";
  } else if (res === "w") {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
console.log(checkName("Salman"))