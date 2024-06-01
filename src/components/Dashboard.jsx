import React, { useEffect, useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  MapPinIcon,
  MapIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  HomeModernIcon,
  Bars3Icon,
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import StickyNavbar from "./StickyNavbar";
import Index from "./Dashboard/Index";
import Profile from "./Dashboard/Profile";
import Ecommerce from "./Dashboard/Ecommerce";
import Search from "./Dashboard/Search";
import AddData from "./Dashboard/AddData";
import Data from "./Dashboard/Analisis";
import GeoLocation from "./Dashboard/GeoLocation";
import logoLabel from "../../public/logo_pemkab.png";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const nav = {
  dashboard: "Dashboard",
  commerce: "E-Commerce",
  search: "Search",
  addData: "Add Data",
  profile: "Profile",
  inbox: "Inbox",
  data: "Data",
  location: "Geo Location",
  setting: "Settings",
  logout: "Logout",
};

const menuClickDash = (e) => {
  // ubah target jadi biru
};

const Sidebar = (props) => {
  const [isActiveDash, setIsActiveDash] = useState(true);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveAnalys, setIsActiveAnalys] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const [isActiveGeo, setIsActiveGeo] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const { id } = useParams();

  const getMemberbyId = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3000/members/dashboard/${id}`
    );
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPicture(response.data.picture);
  };

  useEffect(() => {
    getMemberbyId();
  }, []);
  // const getUser = async () => {
  //   const res = await axios.get("http://localhost:3000/account")
  //   setUsers(res.data)
  //   console.log(res.data);
  // };
  const handleLogout = async (e) => {
    try {
      await axios.get("http://127.0.0.1:3000/users/logout");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSideActive = (e) => {
    if (e.target.id === "dashboard") {
      setIsActiveDash(true);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(false);
    } else if (e.target.id === "search") {
      console.log(e.target.id);
    } else if (e.target.id === "addData") {
      console.log(e.target.id);
    } else if (e.target.id === "analisis") {
      console.log(e.target.id);
    } else if (e.target.id === "geoLocation") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(true);
    } else if (e.target.id === "logout") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(true);
      googleLogout();
      navigate("/");
    }
  };
  const activeButton = "bg-green-400 hover:bg-green-400 text-white";
  return (
    <>
      <Card className="sticky bottom-0 z-10 left-10 lg:top-0 lg:h-screen lg:w-full p-4 shadow-xl shadow-blue-gray-100 hidden flex-row lg:flex-col lg:flex justify-between">
        <List className="flex flex-row lg:flex-col">
          <div className="mb-1 p-1">
            <div className="font-bold text-xl lg:block hidden">
              <a href="/">
                <img src={logoLabel} alt="" />
              </a>
            </div>
          </div>
          <div>
            <ListItem
              id="dashboard"
              onClick={() => {
                props.onMenuClick(nav.dashboard);
                setIsActiveDash(true);
                setIsActiveSearch(false);
                setIsActiveAdd(false);
                setIsActiveAnalys(false);
                setIsActiveLogout(false);
                setIsActiveGeo(false);
              }}
              className={`hover:bg-blue-gray-100/50 text-black rounded-md h-14 px-3 ${
                isActiveDash && `bg-green-400 hover:bg-green-400 text-white`
              }`}
            >
              <ListItemPrefix>
                <HomeIcon className={`h-5 w-5`} />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </div>
          {/* <div onClick={handleSideActive}>
            <ListItem
              id="search"
              onClick={() => props.onMenuClick(nav.search)}
              className={`hover:bg-blue-gray-100/50 rounded-md h-14 px-3 ${
                isActiveSearch && activeButton
              }`}
            >
              <ListItemPrefix>
                <MagnifyingGlassIcon className="h-5 w-5" />
              </ListItemPrefix>
              Search
            </ListItem>
          </div> */}
          <div>
            <ListItem
              id="addData"
              onClick={() => {
                props.onMenuClick(nav.addData);
                setIsActiveDash(false);
                setIsActiveSearch(false);
                setIsActiveAdd(true);
                setIsActiveAnalys(false);
                setIsActiveLogout(false);
                setIsActiveGeo(false);
              }}
              className={`hover:bg-blue-gray-100/50 rounded-md h-14 px-3 ${
                isActiveAdd && `bg-green-400 hover:bg-green-400 text-white`
              }`}
            >
              <ListItemPrefix>
                <PlusCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Data
            </ListItem>
          </div>
          <div onClick={handleSideActive}>
            <ListItem
              id="analisis"
              onClick={() => {
                props.onMenuClick(nav.data);
                setIsActiveDash(false);
                setIsActiveSearch(false);
                setIsActiveAdd(false);
                setIsActiveAnalys(true);
                setIsActiveLogout(false);
                setIsActiveGeo(false);
              }}
              className={`hover:bg-blue-gray-100/50 rounded-md h-14 px-3 ${
                isActiveAnalys && activeButton
              }`}
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Analisis
            </ListItem>
          </div>
          <div onClick={handleSideActive}>
            <ListItem
              id="geoLocation"
              onClick={() => props.onMenuClick(nav.location)}
              className={`hover:bg-blue-gray-100/50 rounded-md h-14 px-3 ${
                isActiveGeo && activeButton
              }`}
            >
              <ListItemPrefix>
                <MapPinIcon className="h-5 w-5" />
              </ListItemPrefix>
              Geo Location
            </ListItem>
          </div>
          <a href="http://localhost:3000/logout">
            <div onClick={handleSideActive}>
              <ListItem
                id="logout"
                onClick={() => props.onMenuClick(nav.logout)}
                className={`hover:bg-blue-gray-100/50 rounded-md h-14 px-3 ${
                  isActiveLogout && activeButton
                }`}
              >
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </div>
          </a>
        </List>
        <div className="profile text-sm w-full border bg-green-400 rounded-md h-16 text-white flex items-center justify-center cursor-pointer">
          <div className="flex flex-row w-11/12 h-3/4 items-center justify-evenly">
            <div className="w-10 h-10">
              <div className="image-profile bg-white rounded-full w-10 h-10 box-border">
                <img
                  className="rounded-full w-full h-full"
                  src={picture}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="nama text-base">{username}</div>
              <div className="email text-[10px]">{email}</div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

const Content = ({ selectedMenu }) => {
  return (
    <div className="content lg:w-full w-screen">
      {/* <h2 className="font-bold text-xl">{selectedMenu}</h2> */}
      {/* Konten sesuai dengan menu yang dipilih */}
      {selectedMenu === nav.dashboard && <Index title={selectedMenu} />}
      {selectedMenu === nav.search && <Search />}
      {selectedMenu === nav.addData && <AddData />}
      {selectedMenu === nav.data && <Data />}
      {selectedMenu === nav.location && <GeoLocation />}
    </div>
  );
};
const NavMobile = ({ onNavClick }) => {
  const [isActiveDash, setIsActiveDash] = useState(true);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveAnalys, setIsActiveAnalys] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const [isActiveGeo, setIsActiveGeo] = useState(false);
  const handleNavActive = (e) => {
    console.log(e.target.id);
    if (e.target.id === "dashboard") {
      setIsActiveDash(true);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(false);
    } else if (e.target.id === "search") {
      setIsActiveDash(false);
      setIsActiveSearch(true);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(false);
    } else if (e.target.id === "addData") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(true);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(false);
    } else if (e.target.id === "analisis") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(true);
      setIsActiveLogout(false);
      setIsActiveGeo(false);
    } else if (e.target.id === "geoLocation") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(false);
      setIsActiveGeo(true);
    } else if (e.target.id === "logout") {
      setIsActiveDash(false);
      setIsActiveSearch(false);
      setIsActiveAdd(false);
      setIsActiveAnalys(false);
      setIsActiveLogout(true);
    }
  };
  return (
    <Card className="lg:hidden sticky bottom-0 bg-white w-screen h-20px border p-2 flex justify-evenly items-center flex-row">
      <div id="dashboard" onClick={handleNavActive}>
        <ListItem
          id="dashboard"
          onClick={() => onNavClick(nav.dashboard)}
          className={`w-10 h-10 ${
            isActiveDash && "bg-blue-gray-500 text-white"
          } rounded-md flex items-center justify-center p-0`}
        >
          <HomeIcon id="dashboard" className="h-5 w-5" />
        </ListItem>
      </div>
      {/* <div id="search" onClick={handleNavActive}>
        <ListItem
          id="search"
          onClick={() => onNavClick(nav.search)}
          className={`w-10 h-10 ${
            isActiveSearch && "bg-blue-gray-500 text-white"
          } rounded-md flex items-center justify-center p-0`}
        >
          <MagnifyingGlassIcon id="search" className="h-5 w-5" />
        </ListItem>
      </div> */}
      <div id="addData" onClick={handleNavActive}>
        <ListItem
          id="addData"
          onClick={() => onNavClick(nav.addData)}
          className={`w-10 h-10 ${
            isActiveAdd && "bg-blue-gray-500 text-white"
          } rounded-md flex items-center justify-center p-0`}
        >
          <PlusCircleIcon id="addData" className="h-5 w-5" />
        </ListItem>
      </div>
      <div id="analisis" onClick={handleNavActive}>
        <ListItem
          id="analisis"
          onClick={() => onNavClick(nav.data)}
          className={`w-10 h-10 ${
            isActiveAnalys && "bg-blue-gray-500 text-white"
          } rounded-md flex items-center justify-center p-0`}
        >
          <UserCircleIcon id="analisis" className="h-5 w-5" />
        </ListItem>
      </div>
      <div id="geoLocation" onClick={handleNavActive}>
        <ListItem
          id="analisis"
          onClick={() => onNavClick(nav.data)}
          className={`w-10 h-10 ${
            isActiveAnalys && "bg-blue-gray-500 text-white"
          } rounded-md flex items-center justify-center p-0`}
        >
          <MapPinIcon id="geoLocation" className="h-5 w-5" />
        </ListItem>
      </div>
      <div id="logout" onClick={handleNavActive}>
        <Link to="/login">
          <ListItem
            id="logout"
            onClick={() => onNavClick(nav.logout)}
            className={`w-10 h-10 ${
              isActiveLogout && "bg-blue-gray-500 text-white"
            } rounded-md flex items-center justify-center p-0`}
          >
            <PowerIcon id="logout" className="h-5 w-5" />
          </ListItem>
        </Link>
      </div>
    </Card>
  );
};

const SideMenu = ({ onMenuClick }) => {
  const [isActiveDash, setIsActiveDash] = useState(true);
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveAnalys, setIsActiveAnalys] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const [isActiveGeo, setIsActiveGeo] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const { id } = useParams();

  const getMemberbyId = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3000/members/dashboard/${id}`
    );
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPicture(response.data.picture);
  };

  const handleLogout = async (e) => {
    try {
      await axios.get("http://127.0.0.1:3000/users/logout");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMemberbyId();
  }, []);
  return (
    <div className="sticky bottom-0 z-10 left-10 lg:top-0 lg:h-screen lg:w-full p-4 shadow-xl shadow-blue-gray-100 hidden flex-row lg:flex-col lg:flex justify-between">
      <div className="flex flex-row lg:flex-col">
        <div className="mb-1 p-1">
          <div className="font-bold text-xl lg:block hidden">
            <a href="/">
              <img src={logoLabel} alt="" />
            </a>
          </div>
        </div>
        <div
          className={`hover:bg-green-100 text-black hover:text-black cursor-pointer rounded-md h-14 flex items-center text-base px-3 ${
            isActiveDash ? "bg-green-400 text-white hover:bg-green-400 hover:text-white" : "bg-white"
          }`}
          onClick={() => {
            onMenuClick(nav.dashboard);
            setIsActiveDash(true);
            setIsActiveAdd(false);
            setIsActiveAnalys(false);
            setIsActiveGeo(false);
            setIsActiveLogout(false);
          }}
        >
          <HomeIcon className="h-5 w-5 mx-2" />
          <span className="mx-2">Dashboard</span>
        </div>
        <div
          className={`hover:bg-green-100 text-black hover:text-black cursor-pointer rounded-md h-14 flex items-center text-base px-3 ${
            isActiveAdd ? "bg-green-400 text-white hover:bg-green-400 hover:text-white" : "bg-white"
          }`}
          onClick={() => {
            onMenuClick(nav.addData);
            setIsActiveDash(false);
            setIsActiveAdd(true);
            setIsActiveAnalys(false);
            setIsActiveGeo(false);
            setIsActiveLogout(false);
          }}
        >
          <PlusCircleIcon className="h-5 w-5 mx-2" />
          <span className="mx-2">Add Data</span>
        </div>
        <div
          className={`hover:bg-green-100 text-black hover:text-black cursor-pointer rounded-md h-14 flex items-center text-base px-3 ${
            isActiveAnalys ? "bg-green-400 text-white hover:bg-green-400 hover:text-white" : "bg-white"
          }`}
          onClick={() => {
            onMenuClick(nav.data);
            setIsActiveDash(false);
            setIsActiveAdd(false);
            setIsActiveAnalys(true);
            setIsActiveGeo(false);
            setIsActiveLogout(false);
          }}
        >
          <UserCircleIcon className="h-5 w-5 mx-2" />
          <span className="mx-2">Data</span>
        </div>
        <div
          className={`hover:bg-green-100 text-black hover:text-black cursor-pointer rounded-md h-14 flex items-center text-base px-3 ${
            isActiveGeo ? "bg-green-400 text-white hover:bg-green-400 hover:text-white" : "bg-white"
          }`}
          onClick={() => {
            onMenuClick(nav.location);
            setIsActiveDash(false);
            setIsActiveAdd(false);
            setIsActiveAnalys(false);
            setIsActiveGeo(true);
            setIsActiveLogout(false);
          }}
        >
          <MapPinIcon className="h-5 w-5 mx-2" />
          <span className="mx-2">Geo Location</span>
        </div>
        <a href="http://localhost:3000/logout">
          <div
            className={`hover:bg-green-100 text-black hover:text-black cursor-pointer rounded-md h-14 flex items-center text-base px-3 ${
              isActiveLogout ? "bg-green-400 text-white hover:bg-green-400 hover:text-white" : "bg-white"
            }`}
            onClick={() => {
              // onMenuClick(nav.location);
              setIsActiveDash(false);
              setIsActiveAdd(false);
              setIsActiveAnalys(false);
              setIsActiveGeo(false);
              setIsActiveLogout(true);
            }}
          >
            <PowerIcon className="h-5 w-5 mx-2" />
            <span className="mx-2">Logout</span>
          </div>
        </a>
      </div>
      <div className="profile text-sm w-full border bg-green-400 rounded-md h-16 text-white flex items-center cursor-pointer">
        <div className="flex flex-row w-11/12 h-3/4 items-center justify-evenly">
          <div className="w-10 h-10">
            <div className="image-profile bg-white rounded-full w-10 h-10 box-border">
              <img
                className="rounded-full w-full h-full"
                src={picture}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="nama text-base">{username}</div>
            <div className="email text-[10px]">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [username, setUsername] = useState("");

  const handleMenuClick = (e) => {
    setSelectedMenu(e);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div>
      {/* <IconButton variant="text" size="sm" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="shadow-md"> */}

      {/* </Drawer> */}
      <div className="lg:flex">
        <div className="lg:w-2/12">
          <SideMenu onMenuClick={handleMenuClick} />
        </div>
        <div className="w-11/12">
          <Content selectedMenu={selectedMenu} />
        </div>
        <NavMobile onNavClick={handleMenuClick} />
      </div>
    </div>
  );
};

export default Dashboard;
