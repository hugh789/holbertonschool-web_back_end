// This file sets up the Express.js routing for the application. It defines routes for:
// - The homepage ('/'), which is handled by the `AppController`.
// - The '/students' endpoint, which retrieves and displays a list of all students, handled by the `StudentController`.
// - The '/students/:major' endpoint, which retrieves and displays a list of students filtered by a specific major (CS or SWE), also handled by the `StudentController`.
// The database file path is passed as a command-line argument (process.argv[2]).
import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const router = express.Router();

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  StudentController.getAllStudents(req, res, process.argv[2]);
});

router.get('/students/:major', (req, res) => {
  StudentController.getAllStudentsByMajor(req, res, process.argv[2]);
});

export default router;