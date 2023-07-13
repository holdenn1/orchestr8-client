import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

function ProfileContent() {
  return (
    <div className={styles.profileContentwrapper}>
      <Outlet />
    </div>
  );
}

export default ProfileContent;
