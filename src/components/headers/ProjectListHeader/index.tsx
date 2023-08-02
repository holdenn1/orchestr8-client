import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import squaredProjectsViewIcon from 'icons/icons8-squared-menu-50.png';
import rowProjectsViewIcon from 'icons/icons8-menu-50.png';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

function ProjectListHeader() {
  const [viewProjects, setViewProjects] = useState(false);
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
      <div className={styles.projectViewBtns}>
        <img
          className={classNames({ [styles.sortByViewActive]: true })}
          src={squaredProjectsViewIcon}
          alt=''
        />
        <img
          className={classNames({ [styles.sortByViewActive]: viewProjects })}
          src={rowProjectsViewIcon}
          alt=''
        />
      </div>
      <div className={styles.projectsTitle}>
        <h3>{list === 'own' ? `Own projects list (${projectList})` : `Foreign projects list (${projectList})`}</h3>
      </div>
    </header>
  );
}

export default ProjectListHeader;
