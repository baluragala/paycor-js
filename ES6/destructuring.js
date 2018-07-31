let members = ["jim", "kim", ["lim", "pim", "bim"]];
// const manager = members[0];
// const lead = members[1];

const [manager, lead, se1] = members;
//const [manager, lead, , se2, se3] = members;
//const [manager, lead, ...engineers] = members;
//const [manager, lead, [e1, e2, e3] = [se1]] = members;

const response = {
  title: "JS in 24hrs",
  author: { first: "Kyle", last: "simpson" },
  isAvailable: true,
  p1: 1,
  P2: 3,
  p3: 6
};

const {
  title: bookTitle,
  author: { first },
  isAvailable = false,
  ...others
} = response;
