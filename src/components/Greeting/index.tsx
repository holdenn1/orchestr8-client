import React from 'react';
import styles from './styles.module.scss'

function Greeting() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Welcome to Orchestr8! </h3>
        <p className={styles.description}>Your project management assistant</p>
        <button type='button' className={styles.greetingBtn}>Start planning</button>
      </div>
    </div>
  );
}

export default Greeting;
