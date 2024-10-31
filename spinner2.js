const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;

for (const symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  
  }, delay);

  delay += 200;
}

setTimeout(() => {
  console.log();
}, delay);