// pages/_app.js or pages/_app.tsx
import './styles.module.css'; // Adicione o caminho correto para seus estilos
import HomePage from './perfil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
