// 2 protocols
// iterable and iterator
//{value: 1, done: false} // iterator result
var numbers = [1, 2, 3, 4, 5];
numbers[Symbol.iterator] = function() {
  var index = 0;
  return {
    next() {
      if (index < numbers.length) {
        return { value: numbers[index++] * 10, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

var it = numbers[Symbol.iterator]();
it.next(); // do this till you get iterator result value done prop as true

function forOf(iterable) {
  if (!iterable[Symbol.iterator]) {
    throw new Error(`${iterable} is not iterable`);
  }

  const it = iterable[Symbol.iterator]();
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}
