import styles from './styles.module.scss';
import contactsIcon from 'icons/icons8-person-30.png';
import tasksIcon from 'icons/icons8-task-24.png';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

function ProfileNavBar() {
  const { projectId, taskId } = useParams();

  return (
    <div className={styles.profileNavBarwrapper}>
      <Link className={styles.contactsIconWrapper} to='/profile/projects/all-projects'>
        <div>
          <img className={styles.contactsIcon} src={contactsIcon} alt='contacts-icon' />
        </div>
      </Link>
      <Link
        className={classNames(styles.contactsIconWrapper, styles.taskIconWrapper, {
          [styles.taskIconWrapperActive]: taskId,
        })}
        to={`/profile/project/${projectId}/all-tasks`}
      >
        <div>
          <img className={styles.contactsIcon} src={tasksIcon} alt='contacts-icon' />
        </div>
      </Link>
    </div>
  );
}

export default ProfileNavBar;
