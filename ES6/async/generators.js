function* doWork() {
  console.log(1);
  yield;
  console.log(2);
  console.log(3);
  console.log(4);
  yield;
  console.log(5);
}
