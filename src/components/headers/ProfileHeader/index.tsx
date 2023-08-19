import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-logout-30.png';
import projIconForm from 'icons/icons8-project-24 (2).png';
import projIcon from 'icons/icons8-project-24 (1).png';
import contactsIcon from 'icons/icons8-person-30.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { logoutUser } from '@/store/actions/authActions/logoutUser';

function ProfileHeader() {
  const { list } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const href = location.href;

  return (
    <header className={styles.header}>
      <Link to={`/profile/own/projects/all-projects`}>
        <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      </Link>
      <div className={styles.contactsIconWrapper}>
        <img className={styles.contactsIcon} src={contactsIcon} alt='contacts-icon' />
      </div>
      {href.includes('project') && (
        <Link className={styles.projIconWrapperMenu} to={`/profile/${list}/projects/all-projects`}>
          <img className={styles.contactsIcon} src={projIcon} alt='contacts-icon' />
        </Link>
      )}
      {list === 'own' && href.includes('projects') && (
        <div>
          {!href.includes('projects-form') && (
            <>
              <Link to={`/profile/${list}/projects-form`} className={styles.addProjectBtn}>
                Start a new project
              </Link>
              <Link className={styles.projIconWrapper} to={`/profile/${list}/projects-form`}>
                <img className={styles.projIcon} src={projIconForm} alt='' />
              </Link>
            </>
          )}
        </div>
      )}

      <div onClick={() => dispatch(logoutUser({ navigate }))} className={styles.bellIconWrapper}>
        <img src={bellIcon} alt='bell' />
      </div>
    </header>
  );
}

export default ProfileHeader;
