
import styles from './styles.module.scss';

function EmptyProjectList() {
  return (
    <div className={styles.emptyProjectListWrapper}>
      <p className={styles.emptyProjectsError}>
        It's still empty here, add new projects!
      </p>
    </div>
  );
}

export default EmptyProjectList;
