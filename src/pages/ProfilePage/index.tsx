import styles from './styles.module.scss';
import ProfileHeader from '@/components/headers/ProfileHeader';
import ProfileNavBar from '@/components/sidebar/ProfileNavBar';
import ProfileInfo from '@/components/sidebar/ProfileInfo';
import { Outlet } from 'react-router-dom';

function ProfilePage() {

  return (
    <main className={styles.profileWrapper}>
      <ProfileHeader />
      <ProfileNavBar />
      <div className={styles.profileContentwrapper}>
        <Outlet />
      </div>
      <ProfileInfo />
    </main>
  );
}

export default ProfilePage;
