import styles from './styles.module.scss';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import classNames from 'classnames';
import { removeOwnProjectsRequest } from '@/api/requests';

function Project() {
  const [isMenu, setIsMenu] = useState(false);
  const { projectId, taskId } = useParams();
  const navigate = useNavigate();
  const isAllTasks = location.href.includes('all-tasks');
  const isParticipants = location.href.includes('participants-project');

  useEffect(() => {}, [projectId]);

  const deleteProject = async () => {
    if (projectId) {
      await removeOwnProjectsRequest(projectId);
      navigate('/profile/projects');
    }
  };

  return (
    <div
      className={styles.projectwrapper}
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
            <Link to={`/profile/projects/${projectId}/add-task`}>
              <li className={classNames(styles.projectMenuItem, styles.participantsMenuItem)}>Add task</li>
            </Link>
            <Link to={`/profile/projects/${projectId}/all-tasks`}>
              <li className={classNames(styles.projectMenuItem, styles.participantsMenuItem)}>All tasks</li>
            </Link>
            <Link to={`/profile/projects/${projectId}/completed-tasks`}>
              <li className={classNames(styles.projectMenuItem, styles.participantsMenuItem)}>
                Completed tasks
              </li>
            </Link>
            <Link to={`/profile/projects/${projectId}/participants-project`}>
              <li className={classNames(styles.projectMenuItem, styles.participantsMenuItem)}>
                Show participants -
              </li>
            </Link>
            <li
              onClick={() => deleteProject()}
              className={classNames(styles.projectMenuItem, styles.removeMenuItem)}
            >
              Remove project
            </li>
          </ul>
        </div>
        <h3 className={styles.title}></h3>
        <p className={styles.description}></p>
        {taskId ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            {!isParticipants && (
              <h4 className={styles.taskTitle}>Task list ({isAllTasks ? 'All tasks' : 'Completed tasks'})</h4>
            )}
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
