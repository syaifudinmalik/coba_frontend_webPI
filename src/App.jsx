import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import TableStrippedRow from "./components/TableStrippedRow";
import AboutUs from "./components/AboutUs";
import EditMember from "./components/Dashboard/EditMember";

function Chart() {
  return (
    <div className="flex justify-evenly">
      <div className="chart w-1/2 h-64 text-sm">
        <Bar
          data={{
            labels: ["Jan", "Feb", "March", "April", "Mei", "June", "July"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div className="chart2 w-1/2 h-64 text-sm">
        <Doughnut
          data={{
            labels: ["Jan", "Feb", "March", "April", "Mei", "June", "July"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div className="chart3 w-1/2 h-64 text-sm">
        <Line
          data={{
            labels: ["Jan", "Feb", "March", "April", "Mei", "June", "July"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddUser />} />
          <Route path="login" element={<Login />} />
          <Route path="lupaPassword" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          {/* </Route> */}
          <Route path="edit/:id" element={<EditMember />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
