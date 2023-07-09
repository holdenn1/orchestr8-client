import { useAppSelector } from '@/hooks/reduxHooks';
import TaskItem from '../TaskItem';
import styles from './../styles.module.scss';

function CompletedTasks() {
  const { currentProject } = useAppSelector((state) => state.project);
  const isCompleteTask = currentProject?.tasks.filter((task) => task.completed);
  return (
    <>
      {isCompleteTask?.length ? (
        <ul className={styles.tasksList}>
          {currentProject?.tasks.map(({ taskId, text, completed }) => {
            if (completed) {
              return <TaskItem key={taskId} taskId={taskId} text={text} />;
            }
          })}
        </ul>
      ) : (
        <p className={styles.noCompletedTask}>You have no completed tasks yet</p>
      )}
    </>
  );
}

export default CompletedTasks;
