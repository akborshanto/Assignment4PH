
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


const res = monthlySavings([ 900 , 2700 , 3400] , 10000   )
console.log(res);
