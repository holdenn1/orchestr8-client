import styles from './styles.module.scss';
import profileIcon from 'icons/icons8-male-user-100.png';
import { useAppSelector } from '@/hooks/reduxHooks';

function UserInfo() {
  const { user } = useAppSelector((state) => state.account);

  return (
    <div className={styles.profileInfo}>
      <div>
        <p className={styles.greeting}>
          <span>Hello</span>
          <br />
          <span className={styles.userName}>
            {user?.firstName} {user?.lastName}
          </span>
        </p>
      </div>
      <div className={styles.profilePhotoWrapper}>
        <img className={styles.photo} src={profileIcon} alt='' />
      </div>
    </div>
  );
}

export default UserInfo;
