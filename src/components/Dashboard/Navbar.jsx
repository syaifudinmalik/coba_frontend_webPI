import React, { useEffect } from 'react'
import axios from 'axios';
import {
    Cog6ToothIcon,
  } from "@heroicons/react/24/outline";

const Navbar = ({image}) => {
  
    return (
      <div className="flex lg:w-full h-12 sticky top-0 border shadow-md bg-white items-center justify-between rounded-b-md">
        <div className="title w-1/6 flex items-center justify-center mx-5">
          <div className='box-border w-1/4 h-1/2'>
            <img src={image} alt="" />
          </div>
          <h1 className='font-bold text-lg'>Dashboard</h1>
        </div>
        <a href="http://localhost:3000/account">
        <div className="mx-5 setting w-3/6  flex items-center justify-center">
          <button>
            <Cog6ToothIcon className="h-5 w-5" />
          </button>
        </div>
        </a>
      </div>
    );
  };

export default Navbar
