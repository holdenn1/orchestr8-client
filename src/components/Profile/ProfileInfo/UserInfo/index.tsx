import { useState } from 'react';
import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import profileIcon from 'icons/icons8-male-user-100.png';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { logoutUser } from '@/store/actions/logoutUser';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const {user} = useAppSelector(state => state.account)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => setIsMenu(false)} className={styles.profileInfo}>
      <div>
        <p className={styles.greeting}>
          <span>Hello</span>
          <br />
          <span className={styles.userName}>{user?.firstName} {user?.lastName}</span>
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
        <div className={styles.projectMenuWrapper}>
          <div
            className={classNames(styles.projectMenu, {
              [styles.projectMenuActive]: isMenu,
            })}
          >
            <ul className={styles.projectMenuList}>
              <li className={styles.projectMenuItem}>Delete avatar</li>
              <li onClick={() => dispatch(logoutUser({ navigate }))} className={styles.projectMenuItem}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
