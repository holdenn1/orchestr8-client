import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import StatusProjectMenu from '@/components/menus/StatusProjectMenu';
import { Project } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setShowMembers } from '@/store/slices/mainSlice';
import { useParams } from 'react-router-dom';

type ProjectItemProps = {
  project: Project;
};

function ProjectItem({ project }: ProjectItemProps) {
  const [isMenu, setIsMenu] = useState(false);
  const { list } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowMembers(false));
  }, []);

  return (
    <div className={styles.projectItem}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      {list === 'own' && (
        <div
          className={styles.menu}
          onClick={(e) => {
            e.preventDefault();
            setIsMenu(!isMenu);
          }}
        >
          <DotMenuIcon />
        </div>
      )}
      <StatusProjectMenu isMenu={isMenu} project={project} setIsMenu={setIsMenu} />
    </div>
  );
}

export default ProjectItem;
