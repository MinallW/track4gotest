import checkUsers from "../axios/api";
import React, { useState, useEffect } from "react";
import { deleteUser } from "../axios/api";

function UsersList(props) {
  const users = props.users;
  users.map((user) => {
    console.log(user)
  })
  const listItems = users.map((user) =>
    <div>
      <li>{user.id_usuario}</li>
      <li>{user.nombre_usuario}</li>
      <li>{user.cedula_usuario}</li>
      <li>{user.teléfono_usuario}</li>
      <li>{user.mail_usuario}</li>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        deleteUser(user.id_usuario)
      }}
      >Borrar</button>
    </div>
  );
  return (
    <ul className="flex justify-around flex-wrap pt-10">{listItems}</ul>
  );
}

export default function User(props) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  async function fetchUserData() {
    const response = await checkUsers();
    setUser(await response.data);
  }

  useEffect(() => {
    fetchUserData();
  }, [data]);

  if (!user) {
    return "loading...";
  }

  return (
    <div>
      <UsersList users={user} />
    </div>
  );
}