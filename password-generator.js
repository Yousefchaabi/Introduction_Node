const generator = require("generate-password");
const password = generator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
  excludeSimilarCharacters: true,
  exclude: true,
  strict: true,
});

console.log(password);
