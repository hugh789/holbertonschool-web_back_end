// Import the necessary modules
const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();

// Define the port number for the server to listen on
const PORT = 1245;

// Retrieve the path to the database file from command line arguments
const database = process.argv[2];

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.status(200); // Set the response status to 200 OK
  res.send('Hello Holberton School!'); // Send the response message
});

// Define a route for the '/students' path
app.get('/students', async (req, res) => {
  res.status(200); // Set the response status to 200 OK
  res.write('This is the list of our students\n'); // Send a preliminary response message

  try {
    // Read the database file asynchronously
    const data = await fs.readFile(database, 'utf8');
    
    // Split the file content by new lines and remove the header row
    const rows = data.split('\n').slice(1);

    // Initialize arrays to store student names by field
    const studentsCS = [];
    const studentsSWE = [];

    // Process each row to categorize students by field
    for (const row of rows) {
      const columns = row.split(',');

      // Add student to the CS field array if the field is 'CS'
      if (columns[3] === 'CS') {
        studentsCS.push(columns[0]);
      }

      // Add student to the SWE field array if the field is 'SWE'
      if (columns[3] === 'SWE') {
        studentsSWE.push(columns[0]);
      }
    }

    // Send the results as part of the response
    res.write(`Number of students: ${studentsCS.length + studentsSWE.length}\n`);
    res.write(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}\n`);
    res.end(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
  } catch (err) {
    // Handle errors (e.g., file not found) by sending an error message
    res.end('Cannot load the database');
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`); // Log server start message
});

// Export the app for use in other modules or for testing
module.exports = app;

