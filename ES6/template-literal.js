const book = { title: "Exploring JS", author: "zeo" };
const message = `A book titled ${book.title} was authored by ${book.author}`;
console.log(message);

function highlight(pieces, ...values) {
  let highlighted = "";
  pieces.forEach(function(part, index) {
    highlighted += `${part} <h1>${values[index] || ""}</h1>`;
  });
  return highlighted;
}

const name = "jim";
const age = 30;

const title = highlight`${name} Person name is  and he is ${age} years old`;
