// Import the necessary modules
const http = require('http'); // Import the HTTP module to create a server
const fs = require('fs').promises; // Import the file system module with promises for asynchronous file reading

const host = 'localhost'; // Define the host
const port = 1245; // Define the port number

const database = process.argv[2]; // Get the database path from command line arguments

// Define the request listener function to handle incoming requests
async function requestListener(req, res) {
  res.setHeader('Content-Type', 'text/plain'); // Set the response header to plain text

  switch (req.url) {
    // Handle the root path '/'
    case '/':
      res.writeHead(200); // Set response status to 200 OK
      res.end('Hello Holberton School!'); // Send a message and end the response
      break;

    // Handle the '/students' path
    case '/students':
      res.writeHead(200); // Set response status to 200 OK
      res.write('This is the list of our students\n'); // Initial response message

      try {
        // Read the database file asynchronously
        const data = await fs.readFile(database, 'utf8');

        // Split the data by lines and ignore the first line (header)
        const rows = data.split('\n').slice(1);

        // Arrays to store students in each field
        const studentsCS = [];
        const studentsSWE = [];

        // Loop through each row and separate students by their field
        for (const row of rows) {
          const columns = row.split(',');

          // Check if the field is CS or SWE and store the student name
          if (columns[3] === 'CS') {
            studentsCS.push(columns[0]);
          } else if (columns[3] === 'SWE') {
            studentsSWE.push(columns[0]);
          }
        }

        // Respond with the total number of students and lists by field
        res.write(`Number of students: ${studentsCS.length + studentsSWE.length}\n`);
        res.write(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}\n`);
        res.write(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}\n`);
        res.end(); // End the response
      } catch (err) {
        // Handle any file reading errors
        res.end('Cannot load the database');
      }
      break;

    // Handle any other path
    default:
      res.writeHead(404); // Set response status to 404 Not Found
      res.end('Not Found'); // End the response with a message
      break;
  }
}

// Create the server and pass the request listener function
const app = http.createServer(requestListener);

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

// Export the request listener function for testing or other use cases
module.exports = requestListener;
