function init({ header, footer, body = "n/a" }) {
  console.log(header, footer, body);
}
init({ header: "head", footer: "foot" });

// function init(config) {
//   console.log(config.header, config.footer, config.body);
// }
