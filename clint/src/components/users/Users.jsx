import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);
  console.log(users);
  const handaleDelet = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const curentUser = users.filter(user => user._id !== id);
              setUsers(curentUser);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-10/12 mx-auto my-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>creationTime</th>
            <th>Phone</th>
            <th>Deatals</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map(user => (
            <tr key={user._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.creationTime}</td>
              <td>{user.phone}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button
                  onClick={() => handaleDelet(user._id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
