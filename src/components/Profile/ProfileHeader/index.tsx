import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-bell-24.png';

import { Link } from 'react-router-dom';
function ProfileHeader() {

  return (
    <header className={styles.header}>
      <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      <div>
        <Link
        to='projects-form'
         
          className={styles.addProjectLink}
        >
          Start a new project
        </Link>
      </div>
      <div className={styles.bellIconWrapper}>
        <img src={bellIcon} alt='bell' />
      </div>
    </header>
  );
}

export default ProfileHeader;
