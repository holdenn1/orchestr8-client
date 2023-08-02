import { useEffect } from 'react';
import styles from './styles.module.scss';
import TaskItem from './TaskItem';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { Link, useParams } from 'react-router-dom';
import { fetchTasks } from '@/store/actions/tasksActions/fetchTasks';
import EmptyList from '@/components/errors/listError/EmptyList';

function TaskList() {
  const { tasks } = useAppSelector((state) => state.task);
  const { projectId, tasks: statusTask, list } = useParams();
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
            <Link key={task.id} to={`/profile/${list}/project/${projectId}/${statusTask}/task/${task.id}`}>
              <TaskItem task={task} />
            </Link>
          ))}
        </ul>
      ) : (
        <div className={styles.errorWrapper}>
          <EmptyList>No tasks found</EmptyList>
        </div>
      )}
    </>
  );
}

export default TaskList;
