import classNames from 'classnames';
import styles from './styles.module.scss';
import { Project } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { MouseEvent, Dispatch } from 'react';
import { completeProject, suspendProject } from '@/store/slices/projectSlice';
import { setComplete, setSuspend } from '@/store/slices/mainSlice';

type StatusProjectMenuProps = {
  setIsMenu: Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
  project: Project;
};

function StatusProjectMenu({ isMenu, project, setIsMenu }: StatusProjectMenuProps) {
  const { complete, suspend } = useAppSelector((state) => state.main.projectMenu);
  const dispatch = useAppDispatch();

  function handleComplete(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    e.preventDefault();
    dispatch(completeProject(project));
    dispatch(setComplete());
    setIsMenu(false);
  }

  function handleSuspend(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    e.preventDefault();
    dispatch(suspendProject(project));
    dispatch(setSuspend());
    setIsMenu(false);
  }

  return (
    <div
      className={classNames(styles.statusProjectMenuWrapper, {
        [styles.statusProjectMenuWrapperActive]: isMenu,
      })}
    >
      <ul className={styles.statusProjectMenuList}>
        <li onClick={(e) => handleComplete(e)} className={styles.statusProjectMenuItem}>
          {!complete ? 'Complete' : 'In progress'}
        </li>

        <li onClick={(e) => handleSuspend(e)} className={styles.statusProjectMenuItem}>
          {!suspend ? 'Suspend' : 'Resume'}
        </li>
      </ul>
    </div>
  );
}

export default StatusProjectMenu;
