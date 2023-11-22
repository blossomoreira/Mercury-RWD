// CadastroPage.js
import React from 'react';
import styles from './styles.module.css';

const CadastroPage = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>Cadastro Page</h1>

          <div className={styles.formContainer}>
            <form>
              <input type="text" placeholder="Nome" className={styles.formInput} />
              <input type="email" placeholder="Email" className={styles.formInput} />
              <input type="password" placeholder="Senha" className={styles.formInput} />
              <button type="submit" className={styles.formButton}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;
