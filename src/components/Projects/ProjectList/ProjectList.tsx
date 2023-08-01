import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjectsAction } from '@/store/actions/projectsActions/fetchOwnProjects';
import ProjectItem from './ProjectItem';
import { Link, useParams } from 'react-router-dom';
import ProjectListHeader from '@/components/headers/ProjectListHeader';
import { setIsAddTaskForm } from '@/store/slices/mainSlice';
import { fetchForeignProjectsAction } from '@/store/actions/projectsActions/fetchForeignProjects';
import EmptyList from '@/components/errors/listError/EmptyList';

function ProjectList() {
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { status, list } = useParams();

  useEffect(() => {
    dispatch(setIsAddTaskForm(false));
  }, []);

  useEffect(() => {
    if (status) {
      dispatch(fetchOwnProjectsAction({ status }));
    }
  }, [status]);

  useEffect(() => {
    if (status) {
      dispatch(fetchForeignProjectsAction({ status }));
    }
  }, [status]);

  return (
    <>
      <ProjectListHeader />
      {list === 'own' ? (
        <>
          {ownProjects.length ? (
            <div className={styles.projectsListWrapper}>
              <div className={styles.projectsList}>
                {ownProjects.map((project) => (
                  <Link to={`/profile/own/project/${project.id}/all-tasks`} key={project.id}>
                    <ProjectItem project={project} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <EmptyList>It's still empty here, add new projects!</EmptyList>
          )}
        </>
      ) : (
        <>
          {foreignProjects.length ? (
            <div className={styles.projectsListWrapper}>
              <div className={styles.projectsList}>
                {foreignProjects.map((project) => (
                  <Link to={`/profile/foreign/project/${project.id}/all-tasks`} key={project.id}>
                    <ProjectItem project={project} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <EmptyList>It's still empty here, add new projects!</EmptyList>
          )}
        </>
      )}
    </>
  );
}

export default ProjectList;
