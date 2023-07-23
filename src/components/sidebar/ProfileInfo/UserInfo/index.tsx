import { useState } from 'react';
import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import profileIcon from 'icons/icons8-male-user-100.png';
import { useAppSelector } from '@/hooks/reduxHooks';
import UserMenu from '@/components/menus/UserMenu';

function UserInfo() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.account);

  return (
    <div onClick={() => setIsMenu(false)} className={styles.profileInfo}>
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
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsMenu(!isMenu);
          }}
          className={styles.dotMenuWrapper}
        >
          <DotMenuIcon />
        </div>
        <UserMenu isMenu={isMenu} />
      </div>
    </div>
  );
}

export default UserInfo;
