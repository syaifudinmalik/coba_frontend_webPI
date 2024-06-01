import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  const getUsersById = async()=>{
    const response = await axios.get(`http://127.0.0.1:3000/users/${id}`)
    setUsername(response.data.username)
    setEmail(response.data.email)
    setGender(response.data.gender)
    setAlamat(response.data.alamat)
    setPassword(response.data.password)
  }

  useEffect(()=>{
    getUsersById()
  },[])

  const UpdateUser = async(e)=>{
    e.preventDefault()
    try {
      await axios.patch(`http://127.0.0.1:3000/users/${id}`,{
        username,
        email,
        gender,
        alamat,
        password
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="columns ml-5">
      <div className="column">
        <form onSubmit={UpdateUser}>
          <div className="container flex flex-col justify-evenly">
            <div className="content flex flex-col">
              <label htmlFor="inputName">Nama</label>
              <input
                type="text"
                name=""
                id="inputName"
                className="bg-gray-200 w-1/5 rounded text-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan nama..."
              />
            </div>
            <div className="content flex flex-col">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                name=""
                id="inputEmail"
                className="bg-gray-200 w-1/5 rounded text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="content flex flex-col">
              <label htmlFor="inputEmail">Gender</label>
              <select name="" id="inputGender" className="bg-gray-200 w-1/5" value={gender}
              onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="content flex flex-col">
              <label htmlFor="inputAlamat">Alamat</label>
              <input
                type="text"
                name=""
                id="inputAlamat"
                className="bg-gray-200 w-1/5 rounded text-lg"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Masukkan Alamat.."
              />
            </div>
            <div className="content flex flex-col">
              <label htmlFor="inputPassword">Alamat</label>
              <input
                type="text"
                name=""
                id="inputPassword"
                className="bg-gray-200 w-1/5 rounded text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="content flex flex-col">
              <button type="submit" className="bg-green-500 text-white rounded w-14 mt-3">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
