function helloWorld() {
  return "Hello World!";
}

module.exports = helloWorld;

if (require.main === module) {
  console.log(helloWorld());
}
