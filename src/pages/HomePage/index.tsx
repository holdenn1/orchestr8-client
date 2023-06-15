import React from 'react';
import styles from './styles.module.scss';
import Greeting from 'components/Greeting';

function HomePage() {
  return (
    <main className={styles.wrapper}>
      <Greeting/>
    </main>
  );
}

export default HomePage;
