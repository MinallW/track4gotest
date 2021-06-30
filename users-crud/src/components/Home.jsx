import Header from "./Header";

export default function Home() {
  return (
    <div className="home">
      <Header page="Home" />
      <main className="main">
        <p>Bienvenido al CRUD de usuarios, backend hecho con ExpressJS y conexiones con base de datos con Docker!</p>
      </main>
    </div>
  );
}