import React, { useState } from "react";
// import { Chart as ChartJS } from "./chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
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
import { Card, Typography, checkbox } from "@material-tailwind/react";
import Navbar from "./Navbar";
import CardPenerima from "./CardPenerima";
import BarChart from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";
import TabContent from "./TabContent";
import DoughnutChart from "./Chart/DoughnutChart";
import logo from "../../../public/Logo-Kabupaten-Bojonegoro.png";
import { Alert,Button } from "flowbite-react";

const jmtPria = Members.filter(
  (member) => member.pekerjaan === "Jamaah Tahlil Pria"
);
const jmtWanita = Members.filter(
  (member) => member.pekerjaan === "Jamaah Tahlil Wanita"
);
const tmrMasjid = Members.filter(
  (member) => member.pekerjaan === "Takmir Masjid"
);
const marbot = Members.filter((member) => member.pekerjaan === "Marbot Masjid");
const guruK = Members.filter((member) => member.pekerjaan === "Guru Keagamaan");
const mdn = Members.filter((member) => member.pekerjaan === "Mudin");

const Index = () => {
  const [isSuccess,setIsSuccess]= useState(false)
  const handleSucces = () => {
    setIsSuccess(true)
  }
  return (
    <div className="bg-gray-100/50 w-full lg:w-full">
      {isSuccess && (
        <Alert color="success" onDismiss={() => setIsSuccess(false)}>
          <span className="font-medium">Info alert!</span> Change a few things
          up and try submitting again.
        </Alert>
      )}
      <Navbar /> {/*Pisahin Njirr */}
      <CardPenerima /> {/*Pisahin Njirr */}
      <div className="flex h-[600px] lg:h-[1200px] justify-evenly items-center">
        <div className="chart flex mt-3 w-full items-center h-[600px] lg:h-full box-border flex-col md:flex-row lg:flex-col justify-around gap-3">
          <BarChart /> {/*Pisahin Njirr */}
          <LineChart /> {/*Pisahin Njirr */}
        </div>
      </div>
      <div className="lg:flex gap-3 lg:grid-cols-3 p-3 flex flex-col items-center w-full justify-center">
        <div className="lg:flex flex justify-evenly items-start flex-1 w-screen lg:w-full">
          {/* <DoughnutChart data={Members} /> */}
        </div>
      </div>
      <Button onClick={handleSucces}>Click</Button>
    </div>
  );
};

export default Index;
