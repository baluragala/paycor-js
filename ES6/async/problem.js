console.log(1);
console.log(2);
console.log(3);
setTimeout(function() {
  console.log(4);
  console.log(5);
  console.log(6);
  setTimeout(function() {
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
  }, 1000);
}, 1000);
