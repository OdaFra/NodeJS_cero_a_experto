const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf8");

const wordCount = content.split(" ").length;
const readWordCount = wordCount.filter(
  (word) => word.toLowerCase() === "react"
).length;

console.log("Palabras: ", wordCount);
console.log("Palabras: ", readWordCount);
