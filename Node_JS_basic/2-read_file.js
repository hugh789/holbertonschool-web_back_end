const fs = require('fs'); // Import the file system module to read files

function countStudents(path) {
  try {
    // Read the file synchronously and trim any trailing new lines or empty spaces
    const data = fs.readFileSync(path, 'utf-8').trim();

    // If the file is empty or unreadable, throw an error
    if (!data) {
      throw new Error('Cannot load the database');
    }

    // Split the file content by new lines to process each line separately
    const lines = data.split('\n');

    // Remove the first line, which is the header, as it's not student data
    const header = lines.shift();

    // Initialize an object to store student names grouped by their field of study
    const fields = {};

    // Initialize a counter for the total number of students
    let studentCount = 0;

    // Loop through each line in the file (each line represents a student)
    lines.forEach((line) => {
      if (line) { // Skip empty lines (if any exist in the file)
        studentCount += 1; // Increase the student count

        // Split the student data by commas (CSV format) to extract values
        const [firstname, , , field] = line.split(',');

        // If the field (e.g., CS, SWE) hasn't been encountered yet, create an array for it
        if (!fields[field]) {
          fields[field] = [];
        }

        // Add the student's firstname to the array for their field
        fields[field].push(firstname);
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${studentCount}`);

    // Log the number of students in each field and their names
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    // If any error occurs (file not found or other issues), throw an error with a specific message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents; // Export the function to be used in other files

