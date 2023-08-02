import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-logout-30.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { logoutUser } from '@/store/actions/authActions/logoutUser';

function ProfileHeader() {
  const { list } = useParams();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <header className={styles.header}>
      <Link to={`/profile/own/projects/all-projects`}>
        <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      </Link>
      {list === 'own' && (
        <div>
          <Link to={`/profile/${list}/projects-form`} className={styles.addProjectBtn}>
            Start a new project
          </Link>
        </div>
      )}
      <div onClick={() => dispatch(logoutUser({ navigate }))} className={styles.bellIconWrapper}>
        <img src={bellIcon} alt='bell' />
      </div>
    </header>
  );
}

export default ProfileHeader;
