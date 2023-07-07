import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import favoriteIcon from 'icons/icons8-star-24.png';
import ProfileContentHeader from '../ProfileContentHeader';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks/reduxHooks';

function ProjectList() {
  const { projects } = useAppSelector((state) => state.project);
  
  return (
    <>
      <ProfileContentHeader />
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <Link to={`/profile/projects/${project.projectId}`} key={project.projectId}>
            <div className={styles.projecetItem}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.menu}>
                <DotMenuIcon />
              </div>
              <img className={styles.favorite} src={favoriteIcon} alt='' />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProjectList;
