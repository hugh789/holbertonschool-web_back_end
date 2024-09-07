const fs = require('fs'); // Import the file system module to read files
const readline = require('readline'); // Import readline module to read files line by line

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const students = {};
    let totalStudents = 0;

    // Create a readable stream for reading the file
    const stream = fs.createReadStream(path);

    // Handle errors if the file doesn't exist or can't be read
    stream.on('error', () => {
      reject(new Error('Cannot load the database'));
    });

    const rl = readline.createInterface({
      input: stream,
    });

    rl.on('line', (line) => {
      if (line.trim() && !line.startsWith('firstname')) { // Skip empty lines and header
        totalStudents += 1;
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    rl.on('close', () => {
      console.log(`Number of students: ${totalStudents}`);
      Object.keys(students).forEach((field) => {
        console.log(`Number of students in ${field}: ${students[field].length}
