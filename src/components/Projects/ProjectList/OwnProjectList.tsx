import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import EmptyList from '@/components/errors/listError/EmptyList';
import { useAppSelector } from '@/hooks/reduxHooks';
import Spinner from '@/components/UI/Spinner';

type OwnProjectListProps = {
  ownListRef: (node?: Element | null | undefined) => void;
};

function OwnProjectList({ ownListRef }: OwnProjectListProps) {
  const { isLoading, ownProjects } = useAppSelector((state) => state.project);
  return (
    <div className={styles.wrapper}>
      <>
        {ownProjects?.length ? (
          <div>
            <div className={styles.projectsList}>
              {ownProjects.map((project) => (
                <Link to={`/profile/own/project/${project.id}/tasks-all`} key={project.id}>
                  <ProjectItem project={project} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>{!isLoading && <EmptyList>It's still empty here, add new projects!</EmptyList>}</>
        )}
      </>
      <div className={styles.obs} ref={ownListRef}></div>
      {isLoading && <Spinner />}
    </div>
  );
}

export default OwnProjectList;
