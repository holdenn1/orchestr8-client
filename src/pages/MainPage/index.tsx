import Greeting from 'components/Greeting';
import styles from './styles.module.scss';
function MainPage() {
  return (
    <main className={styles.mainPageWrapper}>
      <Greeting />
    </main>
  );
}

export default MainPage;
