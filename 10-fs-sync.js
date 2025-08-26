const { readFileSync, writeFileSync, writeFile } = require('fs');

const readFirst = readFileSync("./content/first.txt", "utf8")
const readSecond = readFileSync("./content/second.txt", "utf8")
writeFileSync('./content/result-sync.txt',
    `here is the result ${readFirst}, ${readSecond}\n\n`,
    { flag: 'a' }
)
console.log(readFirst, readSecond)