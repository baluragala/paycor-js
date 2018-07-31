//block scope
// let & const
var x = 3;

function rand(flag) {
  if (flag) {
    var x = Math.random();
    return x;
  }
  return x;
}

function rand1(flag) {
  if (flag) {
    let x = Math.random();
    return x;
  }
  return x;
}

rand1(false);
