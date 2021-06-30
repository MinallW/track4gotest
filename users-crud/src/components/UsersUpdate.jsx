import Header from "./Header";
import UPUserForm from "./UPUserForm";

export default function UserUpdate() {
  return (
    <div className="users">
      <Header page="Actualizar usuarios" />
      <main className="main">
        <UPUserForm/>
      </main>
    </div >
  );
}