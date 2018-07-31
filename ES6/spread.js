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
