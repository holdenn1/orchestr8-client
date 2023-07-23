import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import EmptyProjectList from '@/components/errors/EmptyProjectList';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjects } from '@/store/actions/projectsActions/fetchOwnProjects';
import ProjectItem from './ProjectItem';
import ProfileContentHeader from '@/components/headers/ProfileContentHeader';

function ProjectList() {
  const { ownedProjects } = useAppSelector((state) => state.account.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOwnProjects());
  }, []);

  return (
    <>
      <ProfileContentHeader />
      {ownedProjects ? (
        <div className={styles.projectsListWrapper}>
          <div className={styles.projectsList}>
            {ownedProjects.map((project) => (
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
