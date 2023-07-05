import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-bell-24.png';
function ProfileHeader() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      <div>
        <button type='button' className={styles.addProjectBtn}>
          Start a new project
        </button>
      </div>
      <div className={styles.bellIconWrapper}>
        <img src={bellIcon} alt='bell' />
      </div>
    </div>
  );
}

export default ProfileHeader;
