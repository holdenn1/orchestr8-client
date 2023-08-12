import classNames from 'classnames';
import styles from './../styles.module.scss';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';

function TaskItem({ task: { task, completed } }: { task: ProjectTask }) {
  return (
    <div className={classNames(styles.taskItemWrapper, { [styles.taskComplete]: completed })}>
      <li className={styles.taskItem}>
        <span>{task}</span>
      </li>
    </div>
  );
}

export default TaskItem;
