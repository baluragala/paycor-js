const scores = [60, 40, 56, 77, 89];
scores.filter(function(s, i) {
  console.log(s, i);
  return s > 60;
});

scores.filter(s => s > 60);

var book = {
  title: "Head first JS",
  isbn: 112232333,
  price: 10,
  author: {
    name: "ABC",
    qualification: "Masters"
  },
  describe: () => {
    console.log(this);
    console.log(this.title + " was authored by " + this.author.name);
  }
};

function Person(age) {
  this.age = age;
  this.describe = () => {
    console.log(`Perons age is ${this.age}`);
  };
}
