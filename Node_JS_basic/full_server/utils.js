// full_server/utils.js

// Import the 'fs' module for interacting with the file system and 'resolve' for working with file paths
const fs = require('fs');
const { resolve } = require('path');

// Function to read the database file and return a Promise
function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        // Read the file at the given path asynchronously with 'utf-8' encoding
        fs.readFile(filePath, 'utf-8', (err, data) => {
            // If an error occurs, reject the promise
            if (err) {
                reject(err); // Corrected the typo from 'Err' to 'err'
            } else {
                // Split the file content into an array of lines, trimming any extra whitespace
                const lines = data.trim().split('\n');
                lines.shift(); // Remove the first line (header)

                // Object to store students grouped by their field of study
                const studentsByField = {};

                // Loop through each line (representing a student)
                for (const line of lines) {
                    // Destructure the line to extract the first name and field (ignoring other columns)
                    const [firstname, , , field] = line.split(',');

                    // If the field doesn't exist in the object, initialize an array with the first name
                    if (!studentsByField[field]) {
                        studentsByField[field] = [firstname];
                    } else {
                        // If the field exists, push the first name into the array
                        studentsByField[field].push(firstname);
                    }
                }

                // Resolve the promise with the studentsByField object
                resolve(studentsByField);
            }
        });
    });
}

// Export the readDatabase function for use in other modules
export default readDatabase;
