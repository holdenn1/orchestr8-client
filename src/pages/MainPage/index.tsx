import Greeting from 'components/Greeting';
import styles from './styles.module.scss';
import mainImg from '@/assets/images/wallpaperflare.com_wallpaper (1).jpg'

function MainPage() {
  return (
    <main className={styles.mainPageWrapper}>
      <img className={styles.mainImg} src={mainImg} alt="" />
      <Greeting />
    </main>
  );
}

export default MainPage;
