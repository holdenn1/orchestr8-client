import { useAppSelector } from '@/hooks/reduxHooks';
import TaskItem from '../TaskItem';
import styles from './../styles.module.scss';

function CompletedTasks() {
  const { currentProject } = useAppSelector((state) => state.project);
  return (
    <>
      {currentProject?.completedTask.length ? (
        <ul className={styles.tasksList}>
          {currentProject?.completedTask.map(({ taskId, text }) => (
            <TaskItem key={taskId} taskId={taskId} text={text} />
          ))}
        </ul>
      ) : (
        <p className={styles.noCompletedTask}>You have no completed tasks yet</p>
      )}
    </>
  );
}

export default CompletedTasks;
