import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjectsAction } from '@/store/actions/projectsActions/fetchOwnProjects';
import { Link, useParams } from 'react-router-dom';
import ProjectListHeader from '@/components/headers/ProjectListHeader';
import { setIsAddTaskForm, setShowMembers } from '@/store/slices/mainSlice';
import { fetchForeignProjectsAction } from '@/store/actions/projectsActions/fetchForeignProjects';
import { useInView } from 'react-intersection-observer';
import { clearProjectsList, setCurrentPageProjectList } from '@/store/slices/projectSlice';
import ProjectItem from './ProjectItem';
import EmptyList from '@/components/errors/listError/EmptyList';

function ProjectList() {
  const { isSearching, projects, isLoading } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { status, list } = useParams();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (list === 'own') {
      dispatch(setCurrentPageProjectList(1));
      dispatch(clearProjectsList());
    }
    if (list === 'foreign') {
      dispatch(setCurrentPageProjectList(1));
      dispatch(clearProjectsList());
    }
  }, [status, isSearching, list]);

  useEffect(() => {
    if (inView) {
      if (list === 'own' && status) {
        dispatch(
          fetchOwnProjectsAction({
            status,
          }),
        );
      } else {
        if (list === 'foreign' && status) {
         
          dispatch(
            fetchForeignProjectsAction({
              status,
            }),
          );
        }
      }
    }
  }, [inView, status, isSearching, list]);

  useEffect(() => {
    dispatch(setIsAddTaskForm(false));
    dispatch(setShowMembers(false));
  }, []);

  return (
    <>
      <ProjectListHeader />
      <div className={styles.wrapper}>
        <>
          {projects?.length ? (
            <div className={styles.projectsListWrapper}>
              <div className={styles.projectsList}>
                {projects.map((project) => (
                  <Link to={`/profile/${list}/project/${project.id}/tasks-all`} key={project.id}>
                    <ProjectItem project={project} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <>{!isLoading && <EmptyList>It's still empty here, add new projects!</EmptyList>}</>
          )}
        </>
        <div ref={ref}></div>
      </div>
    </>
  );
}

export default ProjectList;
