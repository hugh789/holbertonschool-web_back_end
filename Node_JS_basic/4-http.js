// Import the HTTP module to create a server
const http = require('http');

const host = 'localhost'; // Define the host
const port = 1245; // Define the port number

// Define the function to handle incoming requests
const requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header with status code 200
  res.end('Hello Holberton School!'); // End the response with a message
};

// Create the server using the requestListener function to handle requests
const app = http.createServer(requestListener);

// Start the server and listen on the specified port and host
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

// Export the requestListener function to be used in other modules or for testing
module.exports = requestListener;
