// pages/index.js
import React, { useState } from 'react';
import MenuHamburguer from './menuhamburguer';
import MenuLinks from './menulinks';
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
    zIndex: '3',
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
          <h1>Minha Página Inicial</h1>

          {/* Adicione a seção de perfil com foto e informações adicionais */}
          <div className={styles.profileSection}>
            <div className={styles.profileImage}></div>
            <div className={styles.profileInfo}>
              <h2>Seu Nome</h2>
              <p>Descrição breve sobre você.</p>
              {/* Adicione mais informações conforme necessário */}
            </div>
          </div>

          {/* Outros componentes ou conteúdo da página */}
        </main>
      </div>
    </div>
  );
};

export default Home;
