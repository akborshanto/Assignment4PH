function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number"
  } else {

    let ticketPrice = 120;
    let costOfGuard = 500;
    let costOfLunch = 8 * 50;
    let total = ticketSale * ticketPrice - (costOfGuard + costOfLunch);

    return total;
  }
}
console.log(calculateMoney(-45))
