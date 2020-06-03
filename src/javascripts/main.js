import '../styles/main.scss';
import studentList from './components/studentList/studentList';

console.error('connected with Sass');

const init = () => {
  console.error('it works');
  studentList.createStudentList();
};

init();
