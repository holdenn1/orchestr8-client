import styles from './styles.module.scss';
import contactsIcon from 'icons/icons8-person-30.png';
import tasksIcon from 'icons/icons8-task-24.png';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/reduxHooks';

function ProfileNavBar() {
  const { isShowMembers } = useAppSelector((state) => state.main);
  const { projectId, taskId, list } = useParams();

  return (
    <div className={styles.profileNavBarwrapper}>
      <Link className={styles.contactsIconWrapper} to={`/profile/${list}/projects/all-projects`}>
        <div>
          <img className={styles.contactsIcon} src={contactsIcon} alt='contacts-icon' />
        </div>
      </Link>
      {!isShowMembers && (
        <Link
          className={classNames(styles.contactsIconWrapper, styles.taskIconWrapper, {
            [styles.taskIconWrapperActive]: taskId,
          })}
          to={`/profile/${list}/project/${projectId}/tasks-all`}
        >
          <div>
            <img className={styles.contactsIcon} src={tasksIcon} alt='contacts-icon' />
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProfileNavBar;
