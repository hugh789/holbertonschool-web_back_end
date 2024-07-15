export default function updateStudentGradeByCity(list, city, newGrades) {
    const cityStudents = list.filter((student) => student.location === city);
    const gradedStudents = cityStudents.map((student) => {
      const userGrades = newGrades.filter((grade) => grade.studentId === student.id);
      const newStudent = student;
      if (userGrades.length > 0) {
        newStudent.grade = userGrades[0].grade;
      } else {
        newStudent.grade = 'N/A';
      }
      return newStudent;
    });
  
    return gradedStudents;
  }