export function first(sentence) {
  let words = sentence.split(" ");
  return words[0];
}

export function last(sentence) {
  let words = sentence.split(" ");
  return words[words.length - 1];
}
