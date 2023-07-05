import styles from './styles.module.scss'

function DotMenuIcon() {
  return (
    <div className={styles.dotsMenu}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}

export default DotMenuIcon;
