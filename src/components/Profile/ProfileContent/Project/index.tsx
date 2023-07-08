import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import styles from './styles.module.scss';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { removeProject, setCurrentProject } from '@/store/slices/projectSlice';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import classNames from 'classnames';

function Project() {
  const { projects, currentProject } = useAppSelector((state) => state.project);
  const [isMenu, setIsMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { projectId, taskId } = useParams();
  const navigate = useNavigate();
  const isAllTasks = location.href.includes('all-tasks');

  useEffect(() => {
    if (projectId) {
      const project = projects.find((proj) => proj.projectId === +projectId);
      if (project) {
        dispatch(setCurrentProject(project));
      }
    }
  }, [dispatch, projectId, projects]);

  function deleteProject() {
    dispatch(removeProject(+projectId!));
    navigate('/profile/projects');
  }

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setIsMenu(false);
      }}
    >
      <div className={styles.content}>
        <div
          className={styles.dotMenuWrapper}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenu(!isMenu);
          }}
        >
          <DotMenuIcon />
        </div>
        <div
          className={classNames(styles.projectMenu, {
            [styles.projectMenuActive]: isMenu,
          })}
        >
          <ul className={styles.projectMenuList}>
            <Link to={`/profile/projects/${taskId}/all-tasks`}>
              <li
                className={classNames(
                  styles.projectMenuItem,
                  styles.participantsMenuItem,
                )}
              >
                All tasks
              </li>
            </Link>
            <Link to={`/profile/projects/${taskId}/completed-tasks`}>
              <li
                className={classNames(
                  styles.projectMenuItem,
                  styles.participantsMenuItem,
                )}
              >
                Completed tasks
              </li>
            </Link>
            <li
              className={classNames(styles.projectMenuItem, styles.participantsMenuItem)}
            >
              Show participants - ({currentProject?.projectParticipants.length})
            </li>
            <li
              onClick={() => deleteProject()}
              className={classNames(styles.projectMenuItem, styles.removeMenuItem)}
            >
              Remove project
            </li>
          </ul>
        </div>
        <h3 className={styles.title}>{currentProject?.title}</h3>
        <p className={styles.description}>{currentProject?.description}</p>
        {taskId ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            <h4 className={styles.taskTitle}>
              Task list ({isAllTasks ? 'All tasks' : 'Completed tasks'})
            </h4>
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
