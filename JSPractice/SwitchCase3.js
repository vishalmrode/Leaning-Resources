function checkTicket(age) {
  let ticketPrice;

  if (typeof age !== "number" || age <= 0) {
    return "Please Enter a valid age ";
  }

  switch (true) {
    case age < 12:
      ticketPrice = "Ticket is 5";
      break;
    case age >= 12 && age < 18:
      ticketPrice = "Ticket is 10";
      break;
    case age >= 18 && age < 60:
      ticketPrice = "Ticket is 20";
      break;
    case age >= 60:
      ticketPrice = "Free Travel for senior citizen";
      break;
    default:
      break;
  }
  return ticketPrice;
}

console.log(checkTicket(-1));
console.log(checkTicket(12));
console.log(checkTicket(17));
console.log(checkTicket(18));
console.log(checkTicket(59));
console.log(checkTicket(60));
