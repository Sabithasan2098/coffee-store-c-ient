import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    fetch(
      `https://coffee-store-server-nr133nwh6-sabithasan2098.vercel.app/users/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("User successfully deleted");
          const remainingUser = users.filter((user) => user._id !== id);
          setUsers(remainingUser);
        }
      });
  };

  console.log(users);
  return (
    <div>
      <h1>Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  {
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
