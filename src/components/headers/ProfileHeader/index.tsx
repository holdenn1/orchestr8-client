import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-logout-30.png';
import tasksIcon from 'icons/icons8-task-24.png';
import projIconForm from 'icons/icons8-project-24 (2).png';
import projIcon from 'icons/icons8-project-24 (1).png';
import profileIcon from 'icons/icons8-person.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { logoutUser } from '@/store/actions/authActions/logoutUser';
import { setIsMenu } from '@/store/slices/mainSlice';
import classNames from 'classnames';

function ProfileHeader() {
  const { isLoading } = useAppSelector((state) => state.account);
  const { isMenu } = useAppSelector((state) => state.main);
  const { list, projectId, taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const href = location.href;

  return (
    <header className={styles.header}>
      <Link to={`/profile/own/projects/all-projects`}>
        <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      </Link>
      <div className={styles.contactsIconProfileWrapper} onClick={() => dispatch(setIsMenu(!isMenu))}>
        <img className={styles.contactsIcon} src={profileIcon} alt='profile-icon' />
      </div>
      {taskId && (
        <Link className={styles.taskIconWrapper} to={`/profile/${list}/project/${projectId}/tasks-all`}>
          <div>
            <img className={styles.contactsIcon} src={tasksIcon} alt='contacts-icon' />
          </div>
        </Link>
      )}
      {href.includes('project') && (
        <Link
          className={classNames(styles.projIconWrapperMenu, {
            [styles.projIconWrapperMenuTaskList]: !!projectId,
          })}
          to={`/profile/${list}/projects/all-projects`}
        >
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
      <button
        type='button'
        disabled={isLoading}
        onClick={() => dispatch(logoutUser({ navigate }))}
        className={classNames(styles.bellIconWrapper, { [styles.logoutActive]: isLoading })}
      >
        <img src={bellIcon} alt='bell' />
      </button>
    </header>
  );
}

export default ProfileHeader;
