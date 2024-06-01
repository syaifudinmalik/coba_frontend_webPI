import { G } from "@svgdotjs/svg.js";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://127.0.0.1:3000/users/register",{
        username,
        email,
        gender,
        alamat,
        password
      }).then(res=>{
        if(res.data.status){
          navigate("/login")
        }
      })
    }catch(error){
      console.log(error)
    }
  };
  return (
    <div className="w-full bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 h-3/4 rounded-md flex justify-center flex-col items-center shadow-md">
        <h1 className="text-3xl font-bold">Sign Up</h1>

        <form
          className="flex flex-col w-1/2 h-4/6 items-center justify-evenly border p-5 rounded mt-5"
          onSubmit={registerUser}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="cursor-pointer">
              Username
            </label>
            <input
              type="text"
              className="border w-full h-10 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Username"
              autoFocus
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              type="email"
              className="border w-full h-10 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="gender" className="cursor-pointer">
              gender
            </label>
            <select
              name=""
              id="inputGender"
              className="bg-gray-200 w-1/5"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="alamat" className="cursor-pointer">
              alamat
            </label>
            <input
              type="alamat"
              className="border w-full h-10 rounded"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              id="alamat"
              placeholder="Masukkan alamat..."
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="cursor-pointer">
              Password
            </label>
            <input
              type="password"
              className="border w-full h-10 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md w-20 h-10 mt-5"
          >
            Daftar
          </button>
          <Link to="/login">
            Sudah punya akun ?
            <button className="text-green-500 rounded mt-3 px-2 mb-3 underline">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
