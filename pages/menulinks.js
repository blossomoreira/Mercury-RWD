import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const MenuLinks = ({ menuActive, closeMenu }) => {
  return (
    <div className={`${styles.menuLinks} ${menuActive && styles.active}`} onClick={closeMenu}>
      <Link href="/">Home</Link>
      <Link href="/sobre">Perfil</Link>
    </div>
  );
};

export default MenuLinks;
