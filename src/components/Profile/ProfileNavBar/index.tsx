import styles from './styles.module.scss';
import contactsIcon from 'icons/icons8-person-30.png';
import calendarIcon from 'icons/icons8-calendar-24.png';

function ProfileNavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactsIconWrapper}>
        <img className={styles.contactsIcon} src={contactsIcon} alt='contacts-icon' />
      </div>
      <div className={styles.calendarIconWrapper}>
        <img className={styles.calendarIcon} src={calendarIcon} alt='calendar-icon' />
      </div>
    </div>
  );
}

export default ProfileNavBar;
