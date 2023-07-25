import styles from './../styles.module.scss';
function AllTasks() {
  // const { currentProject } = useAppSelector((state) => state.project);
  return (
    <ul className={styles.tasksList}>
      {/* {currentProject?.tasks.map(({ taskId, text }) => (
        <TaskItem key={taskId} taskId={taskId} text={text} />
      ))} */}
    </ul>
  );
}

export default AllTasks;
