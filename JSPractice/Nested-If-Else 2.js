function checkGrade(score) {
  let grade;

  if (score > 90) {
    grade = "You got A";
  } else {
    if (score >= 80) {
      grade = "You got B";
    } else {
      if (score >= 70) {
        grade = "You got C";
      } else {
        grade = "You got D";
      }
    }
  }
  console.log(grade);
}

checkGrade(30);
checkGrade(64);
checkGrade(77);
checkGrade(91);
