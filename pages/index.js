// LoginPage.js
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const LoginPage = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>Login Page</h1>

          <div className={styles.formContainer}>
            <form>
              <input type="text" placeholder="Username" className={styles.formInput} />
              <input type="password" placeholder="Password" className={styles.formInput} />
              <button type="submit" className={styles.formButton}>
                Login
              </button>
            </form>
            <p>
              Não tem uma conta?{' '}
              <Link href="/cadastro">Crie sua conta</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
