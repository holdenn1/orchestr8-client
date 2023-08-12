import styles from './styles.module.scss';
import TaskItem from './TaskItem';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';

function TaskList({ observeRef }: { observeRef: (node?: Element | null | undefined) => void }) {
  const { tasks } = useAppSelector((state) => state.task);
  const { projectId, tasks: statusTask, list } = useParams();

  return (
    <div>
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
          <p>No tasks found</p>
        </div>
      )}
      <div  ref={observeRef}></div>
    </div>
  );
}

export default TaskList;
