for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let obj = { name: "abc" };
for (let prop in obj) {
  console.log(obj[prop]);
}

let nums = [1, 2, 3, 4, 5];
for (let n of nums) {
  console.log(n);
}
