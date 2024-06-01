import React, { useState } from "react";
import axios from "axios";
import AddDataTahlilPria from "./AddData/AddDataTahlilPria";
import AddDataTahlilWanita from "./AddData/AddDataTahlilWanita";
import AddDataTakmirMasjid from "./AddData/AddDataTakmirMasjid";
import AddDataMarbotMasjid from "./AddData/AddDataMarbotMasjid";
import AddDataMudinPerempuan from "./AddData/AddDataMudinPerempuan";
import AddDataGuruKeagamaan from "./AddData/AddDataGuruKeagamaan";

const Sidebar = ({ onMenu }) => {
  const [isTahlilPria,setIsTahlilPria] = useState(true)
  const [isTahlilWanita,setIsTahlilWanita] = useState(false)
  const [isTakmirMasjid,setIsTakmirMasjid] = useState(false)
  const [isMarbotMasjid,setIsMarbotMasjid] = useState(false)
  const [isMudinPerempuan,setIsMudinPerempuan] = useState(false)
  const [isGuruK,setIsGuruK] = useState(false)
  return (
    <div className="-ml-7 fixed top-0 left-1/4 flex flex-col gap-y-2">
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isTahlilPria ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Tahlil Pria")
          setIsTahlilPria(true)
          setIsTahlilWanita(false)
          setIsTakmirMasjid(false)
          setIsMarbotMasjid(false)
          setIsMudinPerempuan(false)
          setIsGuruK(false)
        }}
      >
        Tahlil Pria
      </div>
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isTahlilWanita ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Tahlil Wanita")
          setIsTahlilPria(false)
          setIsTahlilWanita(true)
          setIsTakmirMasjid(false)
          setIsMarbotMasjid(false)
          setIsMudinPerempuan(false)
          setIsGuruK(false)
        }}
      >
        Tahlil Wanita
      </div>
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isTakmirMasjid ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Takmir Masjid")
          setIsTahlilPria(false)
          setIsTahlilWanita(false)
          setIsTakmirMasjid(true)
          setIsMarbotMasjid(false)
          setIsMudinPerempuan(false)
          setIsGuruK(false)
        }}
      >
        Takmir Masjid
      </div>
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isMarbotMasjid ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Marbot Masjid")
          setIsTahlilPria(false)
          setIsTahlilWanita(false)
          setIsTakmirMasjid(false)
          setIsMarbotMasjid(true)
          setIsMudinPerempuan(false)
          setIsGuruK(false)
        }}
      >
        Marbot Masjid
      </div>
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isMudinPerempuan ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Mudin Perempuan")
          setIsTahlilPria(false)
          setIsTahlilWanita(false)
          setIsTakmirMasjid(false)
          setIsMarbotMasjid(false)
          setIsMudinPerempuan(true)
          setIsGuruK(false)
        }}
      >
        Mudin Perempuan
      </div>
      <div
        className={`h-1/4 shadow-md w-full rounded-md p-3 text-right cursor-pointer ${isGuruK ? 'bg-green-400 text-white' : 'bg-white'}`}
        onClick={() => {
          onMenu("Guru Keagamaan")
          setIsTahlilPria(false)
          setIsTahlilWanita(false)
          setIsTakmirMasjid(false)
          setIsMarbotMasjid(false)
          setIsMudinPerempuan(false)
          setIsGuruK(true)
        }}
      >
        Guru Keagamaan
      </div>
    </div>
  );
};

const Contents = ({ selectedMenu }) => {
  return (
    <div className="bg-white w-11/12 lg:w-3/5 h-full shadow-md flex flex-col">
      {selectedMenu === "Tahlil Pria" && <AddDataTahlilPria title={selectedMenu}/>}
      {selectedMenu === "Tahlil Wanita" && <AddDataTahlilWanita title={selectedMenu}/>}
      {selectedMenu === "Marbot Masjid" && <AddDataMarbotMasjid title={selectedMenu}/>}
      {selectedMenu === "Mudin Perempuan" && <AddDataMudinPerempuan title={selectedMenu}/>}
      {selectedMenu === "Guru Keagamaan" && <AddDataGuruKeagamaan title={selectedMenu}/>}
      {selectedMenu === "Takmir Masjid" && <AddDataTakmirMasjid title={selectedMenu}/>}
    </div>
  );
};

const AddData = () => {
  const [selectedMenu, setSelectedMenu] = useState("Tahlil Pria");

  const handleMenuClick = (e) => {
    setSelectedMenu(e);
  };
  return (
    <div className="w-full h-[1000px] flex items-center justify-center bg-gray-100">
      {/* sidenav */}
      <Sidebar onMenu={handleMenuClick} />
      {/* contents */}
      <Contents selectedMenu={selectedMenu} />
    </div>
  );
};

export default AddData;
