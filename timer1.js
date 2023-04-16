const args = process.argv.slice(2);

for (let arg of args) {
  const num = Number(arg);
  if (!isNaN(num) && num >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}
