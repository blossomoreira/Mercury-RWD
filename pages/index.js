// LoginPage.jsx

import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Footer from './footer';

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.appContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1 className={styles.loginTitle}>Acesse sua conta Mercury</h1>

            <div className={styles.formContainer}>
              <form className={styles.form}>
                <input type="text" placeholder="Username" className={styles.formInput} />
                <input type="password" placeholder="Password" className={styles.formInput} />
                <button type="submit" className={styles.formButton}>
                  Login
                </button>
              </form>
              <p className={styles.signupText}>
                Não tem uma conta?{' '}
                <Link href="/cadastro">Crie sua conta</Link>
                {' '}
                ou
                {' '}
                <Link href="/perfil">Acesse seu perfil</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;