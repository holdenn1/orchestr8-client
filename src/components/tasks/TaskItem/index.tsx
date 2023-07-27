import { Link } from 'react-router-dom';
import styles from './../styles.module.scss';

type TaskItemProps = {
  taskId: number;
  text: string;
};

function TaskItem({ taskId, text }: TaskItemProps) {
  return (
    <div>
      <Link
        key={taskId}
        to={`/`}
      > 
      <li className={styles.taskItem}>
        <span>{text}</span>
      </li>
       </Link> 
    </div>
  );
}

export default TaskItem;
