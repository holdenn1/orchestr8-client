import { useEffect } from 'react';
import styles from './styles.module.scss';
import TaskItem from './TaskItem';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { Link, useParams } from 'react-router-dom';
import { fetchTasks } from '@/store/actions/tasksActions/fetchTasks';
import EmptyTaskList from '@/components/errors/listError/EmptyTaskList';

function TaskList() {
  const { tasks } = useAppSelector((state) => state.task);
  const { projectId, tasks: statusTask } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (statusTask && projectId) {
      dispatch(fetchTasks({ statusTask, projectId }));
    }
  }, [statusTask]);

  return (
    <>
      {tasks.length ? (
        <ul className={styles.tasksList}>
          {tasks?.map((task) => (
            <Link key={task.id} to={`/profile/project/${projectId}/${statusTask}/task/${task.id}`}>
              <TaskItem task={task} />
            </Link>
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
