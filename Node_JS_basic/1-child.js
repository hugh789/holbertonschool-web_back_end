const { spawn } = require('child_process');
const child = spawn('node', ['1-stdin.js']);

// Write to the child's stdin
child.stdin.write('Bob\n');
child.stdout.on('data', (test) => {
  console.log(test.toString());
});