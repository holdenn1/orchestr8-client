import { useEffect } from 'react';
import styles from './styles.module.scss';
import EmptyProjectList from '@/components/errors/listError/EmptyProjectList';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjects } from '@/store/actions/projectsActions/fetchOwnProjects';
import ProjectItem from './ProjectItem';
import { useParams } from 'react-router-dom';
import ProjectListHeader from '@/components/headers/ProjectListHeader';

function ProjectList() {
  const { allProjects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { status } = useParams();

  useEffect(() => {
    if (status) {
      dispatch(fetchOwnProjects({ status }));
    }
  }, [status]);

  return (
    <>
      <ProjectListHeader />
      {allProjects.length ? (
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
