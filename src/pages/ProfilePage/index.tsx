import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import ProfileHeader from '@/components/headers/ProfileHeader';
import ProfileNavBar from '@/components/sidebar/ProfileNavBar';
import ProfileInfo from '@/components/sidebar/ProfileInfo';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setIsMenu } from '@/store/slices/mainSlice';

function ProfilePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useAppDispatch();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 787) {
      dispatch(setIsMenu(false));
    }
  }, [windowWidth]);

  return (
    <main className={styles.profileWrapper}>
      <ProfileHeader />
      <ProfileNavBar />
      <div onClick={() => dispatch(setIsMenu(false))} className={styles.profileContentwrapper}>
        <Outlet />
      </div>
      <ProfileInfo />
    </main>
  );
}

export default ProfilePage;
