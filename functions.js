function makeName(first, last) {
  var fullName = first + "," + last;
  return fullName;
}

makeName("bala", "ragala");

function greet(name) {
  console.log("Hello," + name);
}

// roles
//1. non method functions
//2. constructor
//3. method

// define functions
// 1. function declaration
// 2. function expression
// 3. Using Function constructor

var makeName1 = function(first, last) {
  var fullName = first + "," + last;
  return fullName;
};

//hoisting

makeName("bala", "ragala");

function makeName(first, last) {
  var fullName = first + "," + last;
  return fullName;
}

makeName1("bala", "ragala");

var makeName1 = function(first, last) {
  var fullName = first + "," + last;
  return fullName;
};

var add = new Function("x", "y", "return x + y");
