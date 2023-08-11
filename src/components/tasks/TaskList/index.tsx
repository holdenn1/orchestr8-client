import styles from './styles.module.scss';
import TaskItem from './TaskItem';
import { Link, useParams } from 'react-router-dom';
import EmptyList from '@/components/errors/listError/EmptyList';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';

type TaskListProps = {
  tasks: ProjectTask[];
};
function TaskList({ tasks }: TaskListProps) {
  const { projectId, tasks: statusTask, list } = useParams();

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
