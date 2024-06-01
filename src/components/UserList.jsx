import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://127.0.0.1:3000/users");
    setUser(response.data);
  };

  const deleteUser = async(id)=>{
    try {
      await axios.delete(`http://127.0.0.1:3000/users/${id}`)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="columns w-full ml-3">
      <div className="column w-1/2">
        <Link to="/add">
          <button className="bg-green-500 text-white rounded mt-3 px-2 mb-3">
            Add New
          </button>
        </Link>
        <table className="border table-auto w-full">
          <thead className="bg-gray-200">
            <tr className="border">
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Alamat</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center border py-10">
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.alamat}</td>
                <td>{user.password}</td>
                <td className="flex justify-evenly">
                  <Link to={`/edit/${user._id}`}>
                    <Button
                      color="bg-green-700"
                      text="Edit"
                      textColor="text-white"
                    />
                  </Link>
                  <button onClick={()=>deleteUser(user._id)} className="bg-red-500 rounded px-2">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/login">
          <button className="bg-green-500 text-white rounded mt-3 px-2 mb-3">
            Logout
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-green-500 text-white rounded mt-3 px-2 mb-3">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
