import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logoLabel from "../../public/logo_pemkab.png";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isActive, setIsactive] = useState(false);
  const user = null;

  const handleClick = () => {
    setIsactive(!isActive);
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const myStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "blue" : "white",
    };
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center items-center lg:gap-6 w-full">
      <Typography
        as="li"
        variant="small"
        color="blue-gray" 
        className="p-1 font-normal w-full hover :bg-gray-100 flex items-center justify-center rounded-md text-sm"
        onClick={handleClick}
      >
        <a href="/" className="flex items-center text-black">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal w-full hover:bg-gray-100 flex items-center justify-center rounded-md text-sm"
      >
        <a href="/dashboard" className="flex items-center text-black">
          Dashboard
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal w-full hover:bg-gray-100 flex items-center justify-center rounded-md text-sm"
      >
        <a href="/about" className="flex items-center text-black">
          About
        </a>
      </Typography>
    </ul>
  );
  const ButtonLogin = () => {
    return (
      <Link to="/login">
        <Button
          variant="text"
          size="sm"
          className="hidden lg:inline-block text-black"
        >
          <span>Log In</span>
        </Button>
      </Link>
    );
  };
  const ButtonSignUp = () => {
    return (
      <Link to="/register">
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block bg-green-900 rounded-md text-white"
        >
          <span>Sign Up</span>
        </Button>
      </Link>
    );
  };
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-4 lg:py-2 bg-white border-none backdrop-sm">
      <div className="lg:mx-60 mx-10 flex items-center justify-between text-blue-gray-900">
        <div className="cursor-pointer w-1/2 h-1/2 lg:w-1/6 flex lg:h-1/6 box-border">
          <a href="/">
            <img src={logoLabel} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <ButtonLogin />
            <ButtonSignUp />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-10 w-10 text-inherit hover:bg-gray-100 focus:bg-transparent active:bg-transparent lg:hidden flex items-center justify-center bg-gray-200"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 relative -top-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 relative"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="flex items-center justify-center text-center">
          {navList}
        </div>
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="bg-black">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="text-black">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;
