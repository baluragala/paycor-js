var age = 20;
if (age > 18) {
  console.log("Eligible to vote");
}

if (age > 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

var a = 10,
  b = 12,
  c = 30;

if (a > b && a > c) {
  console.log("A is bigger");
} else if (b > a && b > c) {
  console.log("B is bigger");
} else {
  console.log("C is bigger");
}

///switch

var grade = "A";

switch (grade) {
  case "A":
    console.log("Good job");
    break;
  case "B":
    console.log("Decent job");
    break;
  case "C":
    console.log("Can do better");
    break;
  default:
    console.log("Cannot grade");
}
