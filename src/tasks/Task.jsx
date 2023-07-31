import './task.css';

const Task = ({ title, component }) => {
  return (
    <div className="task">
      <header className="task-title">
        <h2>{title}</h2>
      </header>
      {component}
    </div>
  );
};

export default Task;