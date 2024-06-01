import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // axios.defaults.withCredentials = true;
  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://127.0.0.1:3000/users/lupaPassword", {
          email,
        })
        .then((res) => {
          if (res.data.status) {
            alert("Check your email for reset password link...😁");
            navigate("/login");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 h-3/4 rounded-md flex justify-center flex-col items-center shadow-md">
        <h1 className="text-3xl font-bold">Lupa Password</h1>

        <form
          onSubmit={forgotPassword}
          className="flex flex-col w-1/2 h-2/3 items-center justify-evenly border p-5 rounded mt-5"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              type="email"
              className="border w-full h-10 rounded"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              autoFocus
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md w-20 h-10 mt-5"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
