alert(
  "We will now begin the grading process, please do not panic and hold still while we examine you..."
);

let grade = prompt("Write your grade here.");
console.log(grade);

if (grade >= 90 && grade <= 100) {
  console.log("Congrats, you have reached expectations");
} else if (grade >= 80 && grade <= 89) {
  console.log("Performance acceeptable");
} else if (grade >= 70 && grade <= 79) {
  console.log(
    "Perfrormance at minimum, extra courses required, please head to reception for more information."
  );
} else if (grade >= 60 && grade <= 69) {
  console.log("Please head to reception for more examination, do not panic.");
} else if (grade >= 0 && grade <= 50) {
  console.log(
    "ALERT: speciman does not meet required expectations, please head to reception immediatley. If instructions not followed, expect to be terminated. I repeat, please head to reception immediatley"
  );
}

//its javascript not java!!
