import { useAppSelector } from '@/hooks/reduxHooks';
import { Link } from 'react-router-dom';
import styles from './../styles.module.scss';

type TaskItemProps = {
  taskId: number;
  completed?: boolean;
  text: string;
};

function TaskItem({ taskId, completed, text }: TaskItemProps) {
  const { currentProject } = useAppSelector((state) => state.project);
  return (
    <div>
      <Link
        key={taskId}
        to={`/profile/projects/${currentProject?.projectId}/task/${taskId}`}
      >
        <li className={styles.taskItem}>
          <span>{text}</span>
        </li>
      </Link>
    </div>
  );
}

export default TaskItem;
