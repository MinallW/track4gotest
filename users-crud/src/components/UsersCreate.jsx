import Header from "./Header";
import PUserForm from "./PUserForm";

export default function UserCreate() {
  return (
    <div className="users">
      <Header page="Crear usuarios" />
      <main className="main">
        <PUserForm/>
      </main>
    </div >
  );
}