const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf8");

const words = content.split(" ");
const wordsCount = words.length;
const readWordCount = words.filter(
  (word) => word.toLowerCase() === "react"
).length;

const wordsInclude = words.filter((word) =>
  word.toLowerCase().includes("react")
);
const includeReact = wordsInclude.length

const reactWordContent = content.match(/react/gi).length

console.log("Cantidad de palabras: ", wordsCount);
console.log("Cantidad de palabras react: ", readWordCount);
console.log("Incluye la palabras react: ", includeReact);
console.log("Match la palabras react: ", reactWordContent);
