import { useEffect } from 'react';
import styles from './../styles.module.scss';
import TaskItem from '../TaskItem';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { fetchTasks } from '@/store/actions/tasksActions/fetchTasks';
import EmptyTaskList from '@/components/errors/listError/EmptyTaskList';

function TaskList() {
  const { tasks } = useAppSelector((state) => state.task);

  const dispatch = useAppDispatch();
  const { projectId, tasks: statusTask } = useParams();

  useEffect(() => {
    if (statusTask && projectId) {
      dispatch(fetchTasks({ statusTask, projectId }));
    }
  }, [statusTask]);

  return (
    <>
      {tasks.length ? (
        <ul className={styles.tasksList}>
          {tasks?.map(({ id, task }) => (
            <TaskItem key={id} taskId={id} task={task} />
          ))}
        </ul>
      ) : (
        <div className={styles.errorWrapper}>
          <EmptyTaskList />
        </div>
      )}
    </>
  );
}

export default TaskList;
