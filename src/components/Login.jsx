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
import { Alert } from "@material-tailwind/react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Label, TextInput } from "flowbite-react";
import { HiMail, HiKey, HiOutlineKey } from "react-icons/hi";
import { IoLogoGoogle } from "react-icons/io5";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = null;

  axios.defaults.withCredentials = true;
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://127.0.0.1:3000/users/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.status) {
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="206677187532-49963lq1gm0mmedvu81sppuf44vmk87h.apps.googleusercontent.com">
      <div className="w-full bg-gray-200 h-screen flex justify-center items-center">
        <div className="bg-white w-1/2 h-3/4 rounded-md flex justify-center flex-col items-center shadow-md">
          <h1 className="text-3xl font-bold">Login</h1>
          <form
            onSubmit={loginUser}
            className="flex flex-col w-1/2 h-2/3 items-center justify-evenly border p-5 rounded mt-5"
          >
            <div className="flex flex-col w-full">
              <Label htmlFor="email" className="cursor-pointer">
                Email
              </Label>
              <TextInput
                type="email"
                className="border w-full h-10 rounded"
                id="email"
                value={email}
                icon={HiMail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                autoFocus
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <Label htmlFor="password" className="cursor-pointer">
                Password
              </Label>
              <TextInput
                type="password"
                className="border w-full h-10 rounded"
                value={password}
                icon={HiKey}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
                required
              ></TextInput>
            </div>
            <Link className="text-blue-500 underline mt-3" to="/lupaPassword">
              Lupa Password
            </Link>
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
                navigate("/login");
              }}
            /> */}
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md w-20 h-10 mt-5"
            >
              Login
            </button>
            <Label className="my-5">Login  With<span></span></Label>
            <a href="http://localhost:3000/oauth/login">
              <div className="shadow-sm w-10 h-10 rounded-full flex items-center justify-center border">
                <IoLogoGoogle className="w-5 h-5" />
              </div>
            </a>
            <Link to="/register">
              Belum punya akun ?
              <button className="text-green-500 rounded mt-3 px-2 mb-3 underline">
                Daftar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
