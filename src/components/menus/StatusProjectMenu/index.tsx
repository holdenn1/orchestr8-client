import classNames from 'classnames';
import styles from './styles.module.scss';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { MouseEvent, Dispatch } from 'react';
import { Project, StatusProject } from '@/store/slices/types/projectSliceTypes';
import { updateOwnProjectAction } from '@/store/actions/projectsActions/updateOwmProject';

type StatusProjectMenuProps = {
  setIsMenu: Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
  project: Project;
};

function StatusProjectMenu({ isMenu, setIsMenu, project: {id, status} }: StatusProjectMenuProps) {
  const dispatch = useAppDispatch();


  const handleComplete = async (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (status !== StatusProject.COMPLETED) {
      dispatch(updateOwnProjectAction({ projectId: String(id)  , updateProjectData: { status: StatusProject.COMPLETED } }));
    } else {
      dispatch(updateOwnProjectAction({ projectId: String(id)  , updateProjectData: { status: StatusProject.IN_PROGRESS } }));
    }
    setIsMenu(false);
  };

  const handleSuspend = async (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (status !== StatusProject.SUSPEND) {
      dispatch(updateOwnProjectAction({ projectId: String(id)  , updateProjectData: { status: StatusProject.SUSPEND } }));
    } else {
      dispatch(updateOwnProjectAction({ projectId: String(id)  , updateProjectData: { status: StatusProject.IN_PROGRESS } }));
    }
    setIsMenu(false);
  };

  return (
    <div className={styles.projectMenuWrapper}>
      <div
        className={classNames(styles.projectMenu, {
          [styles.projectMenuActive]: isMenu,
        })}
      >
        <ul className={styles.projectMenuList}>
          <li onClick={(e) => handleComplete(e)} className={styles.projectMenuItem}>
            {status !== StatusProject.COMPLETED ? 'Complete' : 'In progress'}
          </li>
          <li onClick={(e) => handleSuspend(e)} className={styles.projectMenuItem}>
            {status !== StatusProject.SUSPEND ? 'Suspend' : 'Resume'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StatusProjectMenu;
