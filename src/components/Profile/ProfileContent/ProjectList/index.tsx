import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import ProfileContentHeader from '../ProfileContentHeader';
import { Link } from 'react-router-dom';
import EmptyProjectList from '@/components/errors/EmptyProjectList';
import StatusProjectMenu from './StatusProjectMenu';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjects } from '@/store/actions/projectsActions/fetchOwnProjects';

function ProjectList() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const { ownedProjects } = useAppSelector((state) => state.account.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOwnProjects());
  }, []);

  return (
    <>
      <ProfileContentHeader />
      {ownedProjects.length ? (
        <div className={styles.projectsListWrapper}>
          <div className={styles.projectsList}>
            {ownedProjects.map((project) => (
              <Link to={`/profile/projects/${project.id}/all-tasks`} key={project.id}>
                <div className={styles.projecetItem}>
                  <h3 className={styles.title}>{project.titleProject}</h3>
                  <p className={styles.description}>{project.descriptionProject}</p>
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
            ))}
          </div>
        </div>
      ) : (
        <EmptyProjectList />
      )}
    </>
  );
}

export default ProjectList;
