import React, { useState } from "react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Members from "../Datas/members.json";

const Search = () => {
  const members = Members;
  const [InputNama, setInputNama] = useState("");
  const filterData = members.filter((member) => {
    return Object.values(member).some((value) =>
      value.toString().toLowerCase().includes(InputNama.toLowerCase())
    );
  });

  return (
    <div className="h-full lg:h-full w-full bg-gray-100">
      <div className="flex sticky top-0 bg-white items-center justify-center py-3 rounded-b-md shadow-md">
        <div className="input-submit flex items-center justify-evenly w-4/6">
          <input
            value={InputNama}
            onChange={(e) => setInputNama(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="border w-3/4 h-9 rounded-md border-gray-400 focus:border-green-500 px-3"
          />
          <button
            type="submit"
            className="border rounded-full w-9 h-9 flex items-center justify-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="lg:max-w-full h-full grid grid-cols-3 lg:grid-cols-8 m-2 gap-3 items-center overflow-scroll lg:overflow-hidden">
        {filterData.map((member) => (
          <div className="bg-white w-11/12 lg:w-5/6 hover:shadow-md hover:border-1 hover:bg-blue-gray-100 hover:text-black cursor-pointer rounded-md flex flex-col items-center justify-center m-auto">
            <h1 className="m-5">{member.nama}</h1>
            <p>{member.tempatLahir}</p>
            <p>{member.tanggalLahir}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
