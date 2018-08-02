const p = new Promise((resolve, reject) => {
  setTimeout(() => reject({ err: new Error("failed") }), 5000);
});

p.then(data => console.log(data)).catch(err => console.log(err));
