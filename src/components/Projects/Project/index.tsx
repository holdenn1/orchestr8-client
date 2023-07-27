import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import { removeOwnProjectsRequest } from '@/api/requests';
import TaskNavigation from '@/components/menus/TaskNavigation';

function Project() {
  const [isMenu, setIsMenu] = useState(false);
  const { projectId, tasks } = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [projectId]);

  const deleteProject = async () => {
    if (projectId) {
      await removeOwnProjectsRequest(projectId);
      navigate('/profile/projects/all-projects');
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
        <TaskNavigation deleteProject={deleteProject} isMenu={isMenu} />
        <h3 className={styles.title}></h3>
        <p className={styles.description}></p>
        <h4 className={styles.taskTitle}>
          Task list ({tasks === 'all-tasks' ? 'All tasks' : 'Completed tasks'})
        </h4>
      </div>
    </div>
  );
}

export default Project;
