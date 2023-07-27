import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
function EmptyTaskList() {
  const { tasks } = useParams();

  return (
    <div className={styles.emptyProjectListWrapper}>
      <p className={styles.emptyProjectsError}>
        It's empty here, {tasks === 'all-tasks' ? 'add new task!' : 'you haven`t completed the tasks yet'}
      </p>
    </div>
  );
}

export default EmptyTaskList;
