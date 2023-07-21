import { useState } from 'react';
import styles from './styles.module.scss';
import logoIcon from 'icons/orchestr8.svg';
import bellIcon from 'icons/icons8-bell-24.png';
import { useNavigate } from 'react-router-dom';

function ProfileHeader() {
  const [isProjectForm, setProjectForm] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isProjectForm) {
      navigate('/profile/projects-form');
    } else {
      navigate('/profile/projects');
    }
    setProjectForm(!isProjectForm);
  };

  return (
    <header className={styles.header}>
      <img className={styles.logoIcon} src={logoIcon} alt='logo' />
      <div>
        <button onClick={handleClick} className={styles.addProjectBtn}>
          Start a new project
        </button>
      </div>
      <div className={styles.bellIconWrapper}>
        <img src={bellIcon} alt='bell' />
      </div>
    </header>
  );
}

export default ProfileHeader;
