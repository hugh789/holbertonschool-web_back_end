// This file defines the StudentController class, which handles HTTP requests 
// for retrieving student information. It uses the `readDatabase` function to 
// read student data from a CSV file and respond with the list of all students 
// or each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// If the database is not available, it should return a status 500 and the error message Cannot load the database
import readDatabase from '../utils';

export default class StudentController {
  static getAllStudents(request, response, db) {
    readDatabase(db)
      .then((fields) => {
        const students = [];
        let message;
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          message = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
          students.push(message);
        }

        response.status(200).send(`${students.join('\n')}`);
      })

      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, db) {
    if (request.params.major !== 'CS' && request.params.major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(db)
        .then((fields) => {
          const major = fields[request.params.major];

          response.status(200).send(`List: ${major.join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}