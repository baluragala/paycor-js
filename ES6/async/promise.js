const p = new Promise((resolve, reject) => {
  setTimeout(() => reject({ err: new Error("failed") }), 5000);
});

p.then(data => console.log(data)).catch(err => console.log(err));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ message: "p1" }), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ message: "p2" }), 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ message: "p3" }), 1500);
});

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));

Promise.race([p1, p2, p3]).then(results => {
  console.log(results);
});
