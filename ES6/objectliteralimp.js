let title = "you dont know js";
let author = "kyle";

//let book = { title: title, author: author };

let book = { title, author, [title + author]: "", describe() {} };

//computed property
