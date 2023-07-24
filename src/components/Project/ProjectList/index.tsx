import { useEffect } from 'react';
import styles from './styles.module.scss';
import EmptyProjectList from '@/components/errors/EmptyProjectList';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjects } from '@/store/actions/projectsActions/fetchOwnProjects';
import ProjectItem from './ProjectItem';
import ProfileContentHeader from '@/components/headers/ProfileContentHeader';

function ProjectList() {
  const { allProjects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOwnProjects());
  }, []);

  return (
    <>
      <ProfileContentHeader />
      {allProjects ? (
        <div className={styles.projectsListWrapper}>
          <div className={styles.projectsList}>
            {allProjects.map((project) => (
              <ProjectItem project={project} key={project.id} />
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
