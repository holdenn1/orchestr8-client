import ProfileContent from './ProfileContent';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileNavBar from './ProfileNavBar';
import styles from './styles.module.scss';

function Profile() {
  return (
    <div className={styles.profilewrapper}>
      <ProfileHeader />
      <ProfileNavBar />
      <ProfileContent />
      <ProfileInfo />
    </div>
  );
}

export default Profile;
