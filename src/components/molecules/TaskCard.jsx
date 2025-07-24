// components/molecules/TaskCard.jsx
import './TaskCard.scss';
import { IconType } from 'react-icons'; // Якщо використовуєш react-icons

const TaskCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="task-card">
      <div className="icon"><Icon /></div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
