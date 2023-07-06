import styles from './styles.module.scss';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import favoriteIcon from 'icons/icons8-star-24.png';
import ProfileContentHeader from '../ProfileContentHeader';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <>
      <ProfileContentHeader />
      <div className={styles.projectsList}>
        <Link to=''>
          <div className={styles.projecetItem}>
            <h3 className={styles.title}>Lorem,lorem lorem ipsum dolor.</h3>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur
              eius, doloremque, suscipit incidunt eos quibusdam enim ducimus officiis
              nesciunt natus nihil obcaecati nostrum reprehenderit sunt fuga molestias
              exercitationem! Voluptate?
            </p>
            <div className={styles.menu}>
              <DotMenuIcon />
            </div>
            <img className={styles.favorite} src={favoriteIcon} alt='' />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Project;
