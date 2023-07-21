import { useState } from 'react';
import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import ProfileContentHeader from '../ProfileContentHeader';
import { Link } from 'react-router-dom';
import EmptyProjectList from '@/components/errors/EmptyProjectList';
import StatusProjectMenu from './StatusProjectMenu';

function ProjectList() {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <>
      <ProfileContentHeader />
   {/*    {projects.length ? (
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <Link
              to={`/profile/projects/${project.projectId}/all-tasks`}
              key={project.projectId}
            >
              <div className={styles.projecetItem}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div
                  className={styles.menu}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenu(!isMenu);
                  }}
                >
                  <DotMenuIcon />
                </div>
                <StatusProjectMenu isMenu={isMenu} project={project} setIsMenu={setIsMenu}/>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyProjectList />
      )} */}
    </>
  );
}

export default ProjectList;
