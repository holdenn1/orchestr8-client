import { useAppSelector } from '@/hooks/reduxHooks';
import styles from './../styles.module.scss';
function TaskList() {
  const { allProjects } = useAppSelector((state) => state.project);
  return (
    <ul className={styles.tasksList}>
      {/* {currentProject?.tasks.map(({ taskId, text }) => (
        <TaskItem key={taskId} taskId={taskId} text={text} />
      ))} */}
    </ul>
  );
}

export default TaskList;
