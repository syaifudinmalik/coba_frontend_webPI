import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {token} = useParams()


  // axios.defaults.withCredentials = true;
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://127.0.0.1:3000/users/reset-password/${token}`, {
          password,
        })
        .then((res) => {
          if (res.data.status) {
            navigate("/login");
          }
          console.log(res.data)
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 h-3/4 rounded-md flex justify-center flex-col items-center shadow-md">
        <h1 className="text-3xl font-bold">Reset Password</h1>

        <form
          onSubmit={resetPassword}
          className="flex flex-col w-1/2 h-2/3 items-center justify-evenly border p-5 rounded mt-5"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="cursor-pointer">
              New Password
            </label>
            <input
              type="password"
              className="border w-full h-10 rounded"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md w-20 h-10 mt-5"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
