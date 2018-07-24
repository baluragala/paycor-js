/*
for (initialization; test condition; iteration statement){
  Statement(s) to be executed if test condition is true
}
*/

for (var i = 10; i >= 1; i++) {
  console.log(i);
}

for (var i = 10; i >= 1; i += 5) {
  console.log(i);
}

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

/*
while (expression){
  Statement(s) to be executed if expression is true
}
*/
var j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

/*

do{
   Statement(s) to be executed;
} while (expression);

*/

var k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);
