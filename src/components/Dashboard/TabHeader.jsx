import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Popover } from "flowbite-react";

const Content = ({isIdChecked}) => {
  const [isDisabled, setDisabled] = useState(false);
  console.log(isIdChecked);
  const handleEditMany = async (e) => {
    if(isDisabled){
      console.log("Edit Button");
    }
    console.log(null);
  };
  const handleDeleteMany = async (e) => {
    if(isDisabled){
      console.log("Hapus Button");
    }
    console.log(null);
  };
  return (
    <div className="w-36 h-24 flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <button
          onClick={handleEditMany}
          className={`hover:bg-gray-100 rounded-md w-11/12 py-2 flex items-center justify-center ${
            isDisabled
              ? "text-black cursor-pointer "
              : "text-gray-300 cursor-default hover:bg-transparent"
          } `}
        >
          <PencilIcon className="w-4 h-4 font-bold" />
          Edit
        </button>
        <button
          onClick={handleDeleteMany}
          className={`hover:bg-gray-100 rounded-md w-11/12 py-2 flex items-center justify-center ${
            isDisabled
              ? "text-black cursor-pointer "
              : "text-gray-300 cursor-default hover:bg-transparent"
          } `}
        >
          <TrashIcon className="w-4 h-4" />
          Hapus
        </button>
      </div>
    </div>
  );
};

const TabHeader = ({onTabClick, isIdChecked}) => {
  const [isActivePria, setIsActivePria] = useState(true);
  const [isActiveWanita, setIsActiveWanita] = useState(false);
  const [isActiveTakmir, setIsActiveTakmir] = useState(false);
  const [isActiveMarbot, setIsActiveMarbot] = useState(false);
  const [isActiveGuru, setIsActiveGuru] = useState(false);
  const [isActiveMudin, setIsActiveMudin] = useState(false);
  const [selectedIds,setSelectedIds] = useState([])
  const handleActiveTabs = (e) => {
    if (e.target.id === "jmtPria") {
      setIsActivePria(true);
      setIsActiveWanita(false);
      setIsActiveTakmir(false);
      setIsActiveMarbot(false);
      setIsActiveGuru(false);
      setIsActiveMudin(false);
    } else if (e.target.id === "jmtWanita") {
      setIsActivePria(false);
      setIsActiveWanita(true);
      setIsActiveTakmir(false);
      setIsActiveMarbot(false);
      setIsActiveGuru(false);
      setIsActiveMudin(false);
    } else if (e.target.id === "takmirMasjid") {
      setIsActivePria(false);
      setIsActiveWanita(false);
      setIsActiveTakmir(true);
      setIsActiveMarbot(false);
      setIsActiveGuru(false);
      setIsActiveMudin(false);
    } else if (e.target.id === "marbotMasjid") {
      setIsActivePria(false);
      setIsActiveWanita(false);
      setIsActiveTakmir(false);
      setIsActiveMarbot(true);
      setIsActiveGuru(false);
      setIsActiveMudin(false);
    } else if (e.target.id === "guruKeagamaan") {
      setIsActivePria(false);
      setIsActiveWanita(false);
      setIsActiveTakmir(false);
      setIsActiveMarbot(false);
      setIsActiveGuru(true);
      setIsActiveMudin(false);
    } else if (e.target.id === "mudinPerempuan") {
      setIsActivePria(false);
      setIsActiveWanita(false);
      setIsActiveTakmir(false);
      setIsActiveMarbot(false);
      setIsActiveGuru(false);
      setIsActiveMudin(true);
    }
  };
  // const handleCheck = (id,isChecked)=>{
  //   setSelectedIds((prevCheckedIds) => {
  //     if (isChecked) {
  //       return [...prevCheckedIds, id];
  //     } else {
  //       return prevCheckedIds.filter((checkedId) => checkedId !== id);
  //     }
  //   });
  // }
  // const checkBox = onCheckbox

  const contents = (<Content isIdChecked={isIdChecked}/>);

  return (
    <div className="flex w-full h-10 bg-white shadow-sm items-end border border-gray-200 rounded-t-md justify-between">
      <div className="ml-3 flex h-5/6 items-center w-3/4 justify-evenly">
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="jmtPria"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActivePria && "bg-gray-200"
            }`}
          >
            Tahlil Pria
          </button>
        </div>
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="jmtWanita"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActiveWanita && "bg-gray-200"
            }`}
          >
            Tahlil Wanita
          </button>
        </div>
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="takmirMasjid"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActiveTakmir && "bg-gray-200"
            }`}
          >
            Takmir Masjid
          </button>
        </div>
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="marbotMasjid"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActiveMarbot && "bg-gray-200"
            }`}
          >
            Marbot Masjid
          </button>
        </div>
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="guruKeagamaan"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActiveGuru && "bg-gray-200"
            }`}
          >
            Guru Keagamaan
          </button>
        </div>
        <div onClick={handleActiveTabs} className="lg:w-2/6 w-3/4">
          <button
            onClick={(e) => onTabClick(e.target.id)}
            id="mudinPerempuan"
            className={`lg:w-full flex items-center justify-center shadow-sm rounded-t-md h-3/4 text-xs lg:text-sm p-2 ${
              isActiveMudin && "bg-gray-200"
            }`}
          >
            Mudin Perempuan
          </button>
        </div>
      </div>
      {/* <div className="h-full flex items-center justify-center mr-16">
        <Popover content={contents} placement="bottom">
          <button className="bg-gray-200 w-7 h-7 rounded-full flex items-center justify-center">
            <EllipsisVerticalIcon className="w-5 h-5" />
          </button>
        </Popover>
      </div> */}
    </div>
  );
};

export default TabHeader;
