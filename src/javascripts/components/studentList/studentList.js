// todo

// get all students

// display all of them

// profits
import utils from '../../helpers/utils';
import studentData from '../../helpers/data/studentData';
import './studentList.scss';

const createStudentList = () => {
  const allStudents = studentData.getStudents();
  let domString = '<ul class="student-list">';

  allStudents.forEach((student) => {
    // todo: make <li> for each student
    domString += `<li>${student.name}</li>`;
    // console.error(student);
  });
  domString += '</ul>';

  utils.printToDom('#all-students', domString);
};

console.error('mmm');

export default { createStudentList };
