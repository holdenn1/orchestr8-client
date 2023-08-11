import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import EmptyList from '@/components/errors/listError/EmptyList';
import { useAppSelector } from '@/hooks/reduxHooks';
import Spinner from '@/components/UI/Spinner';

type ForeignProjectListProps = {
  foreignListRef: (node?: Element | null | undefined) => void;
};

function ForeignProjectList({ foreignListRef }: ForeignProjectListProps) {
  const { isLoading, foreignProjects } = useAppSelector((state) => state.project);

  return (
    <div className={styles.wrapper}>
      <>
        {foreignProjects?.length ? (
          <div>
            <div className={styles.projectsList}>
              {foreignProjects.map((project) => (
                <Link to={`/profile/foreign/project/${project.id}/tasks-all`} key={project.id}>
                  <ProjectItem project={project} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>{!isLoading && <EmptyList>It's still empty here, add new projects!</EmptyList>}</>
        )}
      </>
      <div className={styles.obs} ref={foreignListRef}></div>
      {isLoading && <Spinner />}
    </div>
  );
}

export default ForeignProjectList;
