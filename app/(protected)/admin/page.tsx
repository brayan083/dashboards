import { auth } from "@/auth";
import React from 'react';

interface User {
  id: number;
  name: string;
  permissions: string[];
}

const users: User[] = [
  { id: 1, name: 'Usuario 1', permissions: ['Gráfico A', 'Gráfico B'] },
  { id: 2, name: 'Usuario 2', permissions: ['Gráfico B', 'Gráfico C'] },
  // Agrega más usuarios según sea necesario
];

const AdminPage = async () => {

  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return <div>Unauthorized</div>;
  }


  return (
    <div>
      <h1>Permisos de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Permisos</th>
            <th>Chats</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminPage;
