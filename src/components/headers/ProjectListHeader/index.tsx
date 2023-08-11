import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';

function ProjectListHeader() {
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const [projectList, setProjectList] = useState('');
  const { list, status } = useParams();

  useEffect(() => {
    switch (status) {
      case 'all-projects': {
        setProjectList('All projects');
        break;
      }
      case 'in-progress': {
        setProjectList('In progress projects');
        break;
      }
      case 'completed': {
        setProjectList('Completed projects');
        break;
      }
      case 'suspend': {
        setProjectList('Suspend projects');
        break;
      }
    }
  }, [status]);

  return (
    <header className={styles.contentHeared}>
      <div className={styles.projectsTitle}>
        <h3>
          {list === 'own'
            ? `Own projects list (${projectList}) on the page -  ${ownProjects.length}`
            : `Foreign projects list (${projectList}) on the page -  ${foreignProjects.length}`}
        </h3>
      </div>
    </header>
  );
}

export default ProjectListHeader;
