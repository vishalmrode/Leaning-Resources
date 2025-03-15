function checkDayOfWeek(dayNumber) {
  let day;

  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log("Invalid Day");
      break;
  }
  return day;
}

// checkDayOfWeek(0);
// checkDayOfWeek(1);
// checkDayOfWeek(3);
//console.log(checkDayOfWeek(5));
console.log(checkDayOfWeek(9));
