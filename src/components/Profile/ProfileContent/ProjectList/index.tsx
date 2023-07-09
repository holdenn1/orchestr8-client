import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import ProfileContentHeader from '../ProfileContentHeader';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';
import EmptyProjectList from '@/components/errors/EmptyProjectList';

function ProjectList() {
  const { projects } = useAppSelector((state) => state.project);

  return (
    <>
      <ProfileContentHeader />
      {projects.length ? (
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <Link
              to={`/profile/projects/${project.projectId}/all-tasks`}
              key={project.projectId}
            >
              <div className={styles.projecetItem}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.menu}>
                  <DotMenuIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyProjectList />
      )}
    </>
  );
}

export default ProjectList;
