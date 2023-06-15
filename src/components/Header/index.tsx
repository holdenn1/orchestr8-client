import React from 'react';
import styles from './styles.module.scss';
import accountIcon from 'icons/account-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to='account'>
        <img className={styles.accountIcon} src={accountIcon} />
      </Link>
    </header>
  );
}

export default Header;
