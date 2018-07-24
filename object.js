var book = {
  title: "Head first JS",
  isbn: 112232333,
  price: 10,
  author: {
    name: "ABC",
    qualification: "Masters"
  },
  describe: function() {
    console.log(this.title + " was authored by " + this.author.name);
  }
};
