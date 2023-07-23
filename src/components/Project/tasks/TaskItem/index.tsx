import { useAppSelector } from '@/hooks/reduxHooks';
import { Link } from 'react-router-dom';
import styles from './../styles.module.scss';

type TaskItemProps = {
  taskId: number;
  text: string;
};

function TaskItem({ taskId, text }: TaskItemProps) {
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
