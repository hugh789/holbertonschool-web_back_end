const fs = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const data = row.split(',');

      // if field is CS add to CS array
      if (data[3] === 'CS') {
        studentsCS.push(data[0]);
      }
      // if field is SWE add to SWE array
      if (data[3] === 'SWE') {
        studentsSWE.push(data[0]);
      }
    }

    console.log(`Number of students: ${studentsCS.length + studentsSWE.length}`);
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
