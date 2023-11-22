// MenuHamburguer.js
import React from 'react';
import styles from './styles.module.css';

const MenuHamburguer = ({ menuActive, toggleMenu, closeMenu }) => {
  return (
    <div className={`${styles.menuContainer} ${menuActive && styles.active}`} onClick={toggleMenu}>
      <div className={`${styles.menuBar} ${menuActive ? styles.menuBar1 : ''}`}></div>
      <div className={`${styles.menuBar} ${menuActive ? styles.menuBar2 : ''}`}></div>
      <div className={`${styles.menuBar} ${menuActive ? styles.menuBar3 : ''}`}></div>
    </div>
  );
};

export default MenuHamburguer;
