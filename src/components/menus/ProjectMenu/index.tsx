import classNames from 'classnames';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { MouseEvent, Dispatch } from 'react';
import { setComplete, setSuspend } from '@/store/slices/mainSlice';
import { Project } from '@/store/slices/types/userSliceTypes';

type ProjectMenuProps = {
  setIsMenu: Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
  project: Project;
};

function ProjectMenu({ isMenu, setIsMenu, project }: ProjectMenuProps) {
  const { complete, suspend } = useAppSelector((state) => state.main.projectMenu);
  const dispatch = useAppDispatch();

  function handleComplete(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    e.preventDefault();

    dispatch(setComplete());
    setIsMenu(false);
  }

  function handleSuspend(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    e.preventDefault();

    dispatch(setSuspend());
    setIsMenu(false);
  }

  return (
    <div className={styles.projectMenuWrapper}>
      <div
        className={classNames(styles.projectMenu, {
          [styles.projectMenuActive]: isMenu,
        })}
      >
        <ul className={styles.projectMenuList}>
          <li onClick={(e) => handleComplete(e)} className={styles.projectMenuItem}>
            {!complete ? 'Complete' : 'In progress'}
          </li>
          <li onClick={(e) => handleSuspend(e)} className={styles.projectMenuItem}>
            {!suspend ? 'Suspend' : 'Resume'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectMenu;
