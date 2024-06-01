import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Typography, checkbox } from "@material-tailwind/react";
import dotenv from "dotenv";
import bp from "body-parser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TableStrippedRow() {
  const [users, setUser] = useState([]);
  const [inputNama, setInputNama] = useState("");
  const [datas, setData] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [category, setCategory] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://127.0.0.1:3000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const checkAll = (e) => {
    const checkboxes = document.getElementsByName("inputCheck");
    const checkboxs = Array.from(checkboxes);
    const newSelectedIds = [];
    // console.log(checkboxes[2].id)
    checkboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
      if (checkbox.checked) {
        // ambil data yang diceklis
        newSelectedIds.push(checkbox.id);
        // console.log(ids)
      } else {
        // setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
        console.log("Tidak ada data yang dipilih");
      }
    });
    setSelectedUserIds(newSelectedIds);
  };
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedUserIds([...selectedUserIds, e.target.id]);
    } else {
      // setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
      console.log("error");
    }
  };
  const exportExcel = async (e) => {
    // console.log(selectedUserIds);
    e.preventDefault()
    try {
      await axios
        .post(`http://127.0.0.1:3000/users/export-excel`, {
          selectedUserIds,
        })
        .then((res) => {
          alert("Data berhasil Di download...");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const exportCsv = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(`http://127.0.0.1:3000/users/export-csv`, {
          selectedUserIds,
        })
        .then((res) => {
          alert("Data berhasil di download...");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const filterUsers = users.filter((user) => {
    if (category === "") {
      return Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(inputNama.toLowerCase())
      );
    } else {
      const gender = Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(category.toLowerCase())
      );
      const searchInput = Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(inputNama.toLowerCase())
      );
      return searchInput && gender;
    }
  });
  const handleSearch = (e) => {
    setInputNama(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="columns w-full ml-3">
      <div className="column w-3/4">
        <div className="flex w-full h-15 items-center justify-around ">
          <div>
            <Link to="/add">
              <button className="bg-green-500 text-white rounded mt-3 px-2 mb-3">
                + Add New
              </button>
            </Link>
          </div>
          <div className="search-input w-1/2 flex justify-evenly">
            <input
              type="text"
              name=""
              id=""
              value={inputNama}
              onChange={handleSearch}
              className="border shadow-sm rounded-sm"
              placeholder="Search"
            />
            <select
              name=""
              id="inputCategory"
              className="border rounded-sm"
              value={category}
              onChange={handleCategory}
            >
              <option value="">Select Option</option>
              <option value="bopong">Bopong</option>
              <option value="trucuk">Trucuk</option>
              <option value="njegulo">Njegulo</option>
              <option value="mojo">Mojo</option>
              <option value="padangan">Padangan</option>
              <option value="sugihwaras">Sugihwaras</option>
            </select>
            <button
              type="submit"
              onSubmit={handleSearch}
              className="bg-green-500 hover:bg-green-400 rounded-md text-white w-12 h-7"
            >
              Cari
            </button>
          </div>
          <div>
           
              <button
                onClick={exportExcel}
                className="bg-green-500 text-white rounded mt-3 px-2 mb-3"
              >
                Download Excel
              </button>
              <button
                onClick={exportCsv}
                className="bg-green-500 text-white rounded mt-3 px-2 mb-3"
              >
                Download Csv
              </button>
          </div>
        </div>

        {/* <div>
          {datas.map((data) => (
            <p>{data.username}</p>
          ))}
        </div> */}

        {/* table */}
        <Card className="h-full w-full shadow-none">
          <table className="w-full min-w-max text-left shadow-md rounded-md mx-10">
            <thead className="bg-gray-200 rounded-md">
              <tr className="rounded-md">
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <input type="checkbox" name="" id="all" onChange={checkAll} />
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    No
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Username
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Email
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Gender
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Alamat
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Password
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {filterUsers.map((user, index) => (
                <tr key={user._id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      name="inputCheck"
                      id={user._id}
                      value={selectedUserIds}
                    />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.username}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.gender}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.alamat}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.password}
                    </Typography>
                  </td>
                  <td className="flex justify-evenly p-4">
                    <Link to={`/edit/${user._id}`}>
                      <Button
                        color="bg-green-700"
                        text="Edit"
                        textColor="text-white"
                      />
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 rounded px-2"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

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
