// components/organisms/TasksGrid.jsx
import { FaShieldAlt, FaMapMarkerAlt, FaHandsHelping, FaTools, FaCloudSun } from 'react-icons/fa';
import { TiWeatherPartlySunny } from "react-icons/ti";
import TaskCard from '../molecules/TaskCard';
import './TaskGrid.scss';   

const tasks = [
  { icon: FaShieldAlt, title: 'Оборона країни', description: 'Захист територіальної цілісності та суверенітету.' },
  { icon: FaMapMarkerAlt, title: 'Контроль територій', description: 'Стримування збройної агресії проти України та відсіч їй.' },
  { icon: FaHandsHelping, title: 'Підтримка миру', description: 'Боротьба з тероризмом на території України.' },
  { icon: FaTools, title: 'Відновлення', description: 'Допомога у відбудові зруйнованої інфраструктури.' },
  { icon: FaCloudSun, title: 'Захист простору', description: 'Захист поітряного, водного та підводного простору України.' }, //change icon
];

const TasksGrid = () => (
  <div className="tasks-grid">
    {tasks.map((task, idx) => (
      <TaskCard key={idx} {...task} />
    ))}
  </div>
);

export default TasksGrid;
