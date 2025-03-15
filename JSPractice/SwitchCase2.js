function checkMonth(monthNumber) {
  let month;

  switch (monthNumber) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sept";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;

    default:
      console.log(
        "There are only twelve months in a year,you have entered invalid month number:  " +
          month
      );
      break;
  }
  return month;
}

//console.log("The given month is:", checkMonth(3));
console.log(checkMonth(7));
//console.log(checkMonth(13));
