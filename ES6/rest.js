function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sum(...args) {
  console.log(args);
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

//let nums = [1, 2, 3, 4, 5, 6];
