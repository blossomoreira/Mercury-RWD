import Link from 'next/link';

function AppIndex() {
  return (
    <div>
      <h1>Página Inicial do App</h1>
      <Link href="/login/">
  Ir para a Página
</Link>
    </div>
  );
}

export default AppIndex;
