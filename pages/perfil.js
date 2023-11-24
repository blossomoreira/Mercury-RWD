// pages/index.js
import React, { useState } from 'react';
import MenuHamburguer from './menuhamburguer';
import MenuLinks from './menulinks';
import Footer from './footer'; 
import styles from './styles.module.css';

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const menuButtonStyle = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    zIndex: 3,
    position: 'absolute',
    top: '10px',
    left: menuActive ? '210px' : '10px',
    transition: 'left 0.3s ease-in-out',
  };

  return (
    <div className={styles.appContainer}>
      <div style={menuButtonStyle}>
        <MenuHamburguer menuActive={menuActive} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      </div>
      <MenuLinks menuActive={menuActive} closeMenu={closeMenu} />

      <div className={`${styles.contentContainer} ${menuActive && styles.contentShift}`}>
        <main className={styles.content}>
          <h1>Perfil</h1>

          <div className={styles.profileSection}>
            <div className={styles.profileImage}></div>
            <div className={styles.profileInfo}>
              <h2>Diogo Moreira</h2>
              <p>Idade: </p>
              <p>Clinica: </p>
              <p>Soro: </p>
              <p>Tratamento atual: </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;
