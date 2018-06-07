import React from 'react';
import styles from './styles.scss';

const Header = props => (
  <header className={styles.header}>
    <div className={styles.column}>
      <span className={styles.title}>© 2017 Japgram</span>
    </div>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>aaaaa</li>
          <li className={styles.listItem}>bbbbb</li>
          <li className={styles.listItem}>ccccc</li>
          <li className={styles.listItem}>etc</li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;