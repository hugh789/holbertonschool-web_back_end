// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Welcome to Holberton School, what is your name?\r', name => {
//   console.log(`Your name is: ${name}!`);
// });

// readline.on('close', () => {
//   console.log('This important software is now closing');
// });

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
