var book = {
  title: "Head first JS",
  isbn: 112232333,
  _price: 10,

  get price() {
    return this._price + " $";
  },

  set price(value) {
    if (value <= 0) {
      throw new Error("Price must be greater than 0");
    }
    this._price = value;
  },
  author: {
    name: "ABC",
    qualification: "Masters"
  },
  describe: function() {
    console.log(this.title + " was authored by " + this.author.name);
  }
};

// creating objects
// 1. literal
// 2. constructor functions ( object factories)
// 3. Object.create

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Object.create({ a: 1, b: 2 });
