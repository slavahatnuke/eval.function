const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function run() {
  console.log('>> build')
  const file = `eval.function.js`;

  const source = `${__dirname}/${file}`;
  const code = (await readFile(source)).toString();
  const indexCode = `module.exports = ${code.trim()}`;
  const dest = `${__dirname}/index.js`;
  await writeFile(dest, indexCode);
  console.log(source, dest);
  console.log('>> done')
}

run()
  .catch((error) => console.error(error, error.stack))
