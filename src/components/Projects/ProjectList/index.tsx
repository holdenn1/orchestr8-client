import { useEffect } from 'react';
import styles from './styles.module.scss';
import EmptyProjectList from '@/components/errors/listError/EmptyProjectList';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjectsAction } from '@/store/actions/projectsActions/fetchOwnProjects';
import ProjectItem from './ProjectItem';
import { useParams } from 'react-router-dom';
import ProjectListHeader from '@/components/headers/ProjectListHeader';
import { setIsAddTaskForm } from '@/store/slices/mainSlice';
import { fetchForeignProjectsAction } from '@/store/actions/projectsActions/fetchForeignProjects';

function ProjectList() {
  const { ownProjects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { status } = useParams();

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
      {ownProjects.length ? (
        <div className={styles.projectsListWrapper}>
          <div className={styles.projectsList}>
            {ownProjects.map((project) => (
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
