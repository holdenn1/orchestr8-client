import classNames from 'classnames';
import styles from './styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsAddTaskForm } from '@/store/slices/mainSlice';

type TaskNavigationProps = {
  deleteProject: () => Promise<void>;
  isMenu: boolean;
};

function TaskNavigation({ deleteProject, isMenu }: TaskNavigationProps) {
  const { isAddTaskForm } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();
  
  const menuList = [
    { id: 1, value: 'All tasks', link: `/profile/project/${projectId}/all-tasks` },
    { id: 2, value: 'Completed tasks', link: `/profile/project/${projectId}/completed` },
    { id: 3, value: 'Show participants - ', link: `/profile/project/${projectId}/participants-project` },
  ];

  return (
    <div
      className={classNames(styles.projectMenu, {
        [styles.projectMenuActive]: isMenu,
      })}
    >
      <ul className={styles.projectMenuList}>
        {menuList.map(({ id, value, link }) => (
          <Link key={id} to={link}>
            <li className={styles.projectMenuItem}>{value}</li>
          </Link>
        ))}
        <li onClick={() => dispatch(setIsAddTaskForm(!isAddTaskForm))} className={styles.projectMenuItem}>
          {isAddTaskForm ? 'Task list' : 'Add task'}
        </li>
        <li
          onClick={() => deleteProject()}
          className={classNames(styles.projectMenuItem, styles.removeMenuItem)}
        >
          Remove project
        </li>
      </ul>
    </div>
  );
}

export default TaskNavigation;
