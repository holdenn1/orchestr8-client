import styles from './styles.module.scss';
import classNames from 'classnames';
import { logoutUser } from '@/store/actions/authActions/logoutUser';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';

function UserMenu({ isMenu }: { isMenu: boolean }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.userMenuWrapper}>
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
  );
}

export default UserMenu;
