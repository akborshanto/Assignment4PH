function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  } else {
    let ticketPrice = 120;
    let costOfGuard = 500;
    let costOfLunch = 8 * 50;
    let total = ticketSale * ticketPrice - (costOfGuard + costOfLunch);

    return total;
  }
}
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
function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    obj.birthYear.toString().length < 4
  ) {
    return "Invalid";
  }

  let name = obj.name;
  let birthYear = obj.birthYear;
  let siteName = obj.siteName;

  let capitalize = siteName.charAt(0).toUpperCase() + siteName.slice(1);
  let passGen = `${capitalize}#${name}@${birthYear}`;
  return passGen;
}
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
      return "invalid input";
    }else{
  
      let totalPayment=0;
      for (let payment of arr) {
        if (payment >= 3000) {
            totalPayment = totalPayment + (payment - (payment * 20/100));
        } else {
            totalPayment += payment;
        }
      }
      let savings= totalPayment - livingCost;
      
  
      if( savings <0){
      const res=" earn more"
        return res
      
      }else{
        return savings;
      }
      
      
      return savings
  
  
  
  
    }
  
  
  
    }