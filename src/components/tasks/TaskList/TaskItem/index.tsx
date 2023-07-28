import classNames from 'classnames';
import styles from './../styles.module.scss';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';

type TaskItemProps = {
  task: ProjectTask;
};

function TaskItem({ task: { task, completed } }: TaskItemProps) {
  return (
    <div>
      <li className={classNames(styles.taskItem, { [styles.taskComplete]: completed })}>
        <span>{task}</span>
      </li>
    </div>
  );
}

export default TaskItem;
