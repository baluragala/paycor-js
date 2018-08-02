function step1(next) {
  console.log(1);
  console.log(2);
  console.log(3);
  setTimeout(function() {
    console.log(4);
    console.log(5);
    next(step3);
  }, 1000);
}

function step2(next) {
  console.log(6);
  next(step4);
}

function step3(next) {
  setTimeout(function() {
    console.log(7);
    console.log(8);
    next();
  }, 1000);
}

function step4() {
  console.log(9);
  console.log(10);
}

// function doWork() {
//   step1();
//   step2();
//   step3();
//   step4();
// }

function doWork() {
  try {
    step1(step2);
  } catch (err) {}
}

doWork();
