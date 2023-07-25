import classNames from 'classnames';
import styles from './styles.module.scss';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { MouseEvent, Dispatch } from 'react';
import { Project, StatusProject } from '@/store/slices/types/projectSliceTypes';
import { updateProjectAction } from '@/store/actions/projectsActions/updateProject';

type ProjectMenuProps = {
  setIsMenu: Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
  project: Project;
};

function ProjectMenu({ isMenu, setIsMenu, project }: ProjectMenuProps) {
  const dispatch = useAppDispatch();

  const handleComplete = async (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (project.status !== StatusProject.COMPLETED) {
      dispatch(updateProjectAction({ project, updateData: { status: StatusProject.COMPLETED } }));
    } else {
      dispatch(updateProjectAction({ project, updateData: { status: StatusProject.IN_PROGRESS } }));
    }
    setIsMenu(false);
  };

  const handleSuspend = async (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (project.status !== StatusProject.SUSPEND) {
      dispatch(updateProjectAction({ project, updateData: { status: StatusProject.SUSPEND } }));
    } else {
      dispatch(updateProjectAction({ project, updateData: { status: StatusProject.IN_PROGRESS } }));
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
            {project.status !== StatusProject.COMPLETED ? 'Complete' : 'In progress'}
          </li>
          <li onClick={(e) => handleSuspend(e)} className={styles.projectMenuItem}>
            {project.status !== StatusProject.SUSPEND ? 'Suspend' : 'Resume'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectMenu;
