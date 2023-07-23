import { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Project } from '@/store/slices/types/userSliceTypes';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import StatusProjectMenu from '@/components/menus/ProjectMenu';

type ProjectItemProps = {
  project: Project;
};

function ProjectItem({ project }: ProjectItemProps) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <Link to={`/profile/projects/${project.id}/all-tasks`} key={project.id}>
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
        <StatusProjectMenu isMenu={isMenu} project={project} setIsMenu={setIsMenu} />
      </div>
    </Link>
  );
}

export default ProjectItem;
