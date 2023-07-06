import ProjectsInfo from './ProjectsInfo';
import UserInfo from './UserInfo';
import styles from './styles.module.scss';

function ProfileInfo() {
  return (
    <div className={styles.wrapper}>
      <UserInfo />
      <ProjectsInfo />
    </div>
  );
}

export default ProfileInfo;
