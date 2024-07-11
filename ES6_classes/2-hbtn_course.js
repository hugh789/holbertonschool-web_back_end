export default class HolbertonCourse {
  constructor(name, length, students) {
    if ((typeof name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if ((typeof length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Not an array');
    }

    // Use the setters instead of assigning directly to the priv vars
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if ((typeof newName) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    if ((typeof newLen) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Number(newLen);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Not an array');
    }
    this._students = newStudents;
  }
}

// Implement a class named HolbertonCourse:

//Constructor attributes:
//name (String)
//length (Number)
//students (array of Strings)
//Make sure to verify the type of attributes during object creation
//Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
//Implement a getter and setter for each attribute.