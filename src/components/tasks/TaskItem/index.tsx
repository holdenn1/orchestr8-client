import { Link } from 'react-router-dom';
import styles from './../styles.module.scss';

type TaskItemProps = {
  taskId: number;
  task: string;
};

function TaskItem({ taskId, task }: TaskItemProps) {
  return (
    <div>
      <Link key={taskId} to={`/`}>
        <li className={styles.taskItem}>
          <span>{task}</span>
        </li>
      </Link>
    </div>
  );
}

export default TaskItem;
