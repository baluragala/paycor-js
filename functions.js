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
  console.log(arguments);
  if (arguments.length != 2) {
    throw new Error("require 2 parameters exactly");
  }

  if (typeof first != "string" || typeof last != "string") {
    throw new Error("parameters must be strings");
  }
  var fullName = first + "," + last;
  return fullName;
}

var makeName1;

makeName1("bala", "ragala");

var makeName1 = function(first, last) {
  var fullName = first + "," + last;
  return fullName;
};

var add = new Function("x", "y", "return x + y");

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// scope & context (this)

// 2 types of JS
// 1. global
// 2. local

function outer() {
  var o1 = 10;
  function inner() {
    var i1 = 20;
    console.log("o1", o1, "i1", i1);
  }
  inner();
  console.log("o1", o1);
}

outer();

function outer() {
  var o1 = 10;
  function inner() {
    var i1 = 20;
    console.log("o1", o1, "i1", i1);
  }
  return inner;
}

outer();

// call, apply and bind

var book = {
  title: "Head first JS",
  isbn: 112232333,
  price: 10,
  author: {
    name: "ABC",
    qualification: "Masters"
  },
  describe: function() {
    console.log(this);
    console.log(this.title + " was authored by " + this.author.name);
  }
};

function add(a, b) {
  console.log(this);
  return a + b;
}
