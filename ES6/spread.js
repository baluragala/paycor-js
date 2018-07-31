const username = "zoelearn";

// const chars = [];
// for (let i = 0; i < username.length; i++) {
//   chars.push(username[i]);
// }
// console.log(chars);

const chars = [...username];

const a1 = [1, [2, 3]];
const a2 = [4, 5, 6];
const a3 = [...a1, 0, ...a2];

const o1 = { name: "john", address: { city: "ny" } };
const o2 = { age: 26 };
const o3 = { ...o1, ...o2 };

let args = [9, 3, -5, 2, 1, 0];
Math.min(...args);
