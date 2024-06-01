import React, { useEffect, useState } from "react";
import TabHeader from "./TabHeader";
import TabTahlilPria from "./TableContent/TabTahlilPria";
import TabTahlilWanita from "./TableContent/TabTahlilWanita";
import TabTakmirMjd from "./TableContent/TabTakmirMjd";
import TabMarbot from "./TableContent/TabMarbot";
import TabGuruK from "./TableContent/TabGuruK";
import TabMudin from "./TableContent/TabMudin";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import exportFromJSON from "export-from-json";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const Content = ({ menu, search, onCheckbox, onLoad, loading }) => {
  return (
    <div className="w-11/12">
      {menu === "jmtPria" && (
        <TabTahlilPria searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />
      )}
      {menu === "jmtWanita" && <TabTahlilWanita searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />}
      {menu === "takmirMasjid" && <TabTakmirMjd searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />}
      {menu === "marbotMasjid" && <TabMarbot searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />}
      {menu === "guruKeagamaan" && <TabGuruK searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />}
      {menu === "mudinPerempuan" && <TabMudin searchDatas={search} onCheckbox={onCheckbox} onLoad={onLoad} loading={loading} />}
    </div>
  );
};

const TabContent = () => {
  const [menu, setMenu] = useState("jmtPria");
  const [inputSearch, setInputSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const handleCheck = (id, isChecked) => {
    setSelectedIds((prevCheckedIds) => {
      if (isChecked) {
        return [...prevCheckedIds, id];
      } else {
        return prevCheckedIds.filter((checkedId) => checkedId !== id);
      }
    });
  };
  const handleMenuClick = (e) => {
    setMenu(e);
    console.log(selectedIds);
    handleCheck()
  };
  
  const getDatafromCheck = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://127.0.0.1:3000/members/jmtPria/download`,
        selectedIds
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownloadCsv = async (e) => {
    const id = e.target.id;
    console.log(id)
    const fieldJmtPria = [
      "KECAMATAN",
      "DESA",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_JAMAAH",
      "JUMLAH_ANGGOTA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldJmtWanita = [
      "KECAMATAN",
      "DESA",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_JAMAAH_TAHLIL",
      "JUMLAH_ANGGOTA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
      "DIGIT",
    ];
    const fieldGuruK = [
      "KECAMATAN",
      "KELURAHAN",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_LEMBAGA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldMdnPerempuan = [
      "KECAMATAN",
      "KELURAHAN",
      "RT",
      "RW",
      "DUSUN",
      "NAMA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldMbtMasjid = [
      "KECAMATAN",
      "KELURAHAN",
      "NAMA_TEMPAT_IBADAH",
      "RT",
      "RW",
      "DUSUN",
      "NAMA_PETUGAS",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldTmrMasjid = [
      "KECAMATAN",
      "KELURAHAN",
      "NAMA_MASJID",
      "RT",
      "RW",
      "DUSUN",
      "NAMA_KETUA_TAKMIR",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fileNameAll =
      (id === "jmtPria" && "JamaahTahlilPria_All") ||
      (id === "jmtWanita" && "JamaahTahlilWanita_All") ||
      (id === "guruKeagamaan" && "GuruKeagaaman_All") ||
      (id === "marbotMasjid" && "MarbotMasjid_All") ||
      (id === "mudinPerempuan" && "MudinPerempuan_All") ||
      (id === "takmirMasjid" && "TakmirMasjid_All");
    const fileName =
      (id === "jmtPria" && "JamaahTahlilPria") ||
      (id === "jmtWanita" && "JamaahTahlilWanita") ||
      (id === "guruKeagamaan" && "GuruKeagaaman") ||
      (id === "marbotMasjid" && "MarbotMasjid") ||
      (id === "mudinPerempuan" && "MudinPerempuan") ||
      (id === "takmirMasjid" && "TakmirMasjid");
    const fields =
      (id === "jmtPria" && fieldJmtPria) ||
      (id === "jmtWanita" && fieldJmtWanita) ||
      (id === "guruKeagamaan" && fieldGuruK) ||
      (id === "marbotMasjid" && fieldMbtMasjid) ||
      (id === "mudinPerempuan" && fieldMdnPerempuan) ||
      (id === "takmirMasjid" && fieldTmrMasjid);
    if (selectedIds.length === 0) {
      const res = await axios.get(`http://127.0.0.1:3000/members/${id}`);
      const data = res.data;
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({
        data,
        fileNameAll,
        fields,
        exportType,
      });
    } else {
      await axios
        .post(`http://127.0.0.1:3000/members/${id}/download`, selectedIds)
        .then((response) => {
          const data = response.data;
          const exportType = exportFromJSON.types.csv;
          exportFromJSON({
            data,
            fileName,
            fields,
            exportType,
          });
        })
        .catch((err) => {
          console.log("error downloading file");
        });
    }
  };

  const handleDownloadExcel = async (e) => {
    const id = e.target.id;
    const fieldJmtPria = [
      "KECAMATAN",
      "DESA",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_JAMAAH",
      "JUMLAH_ANGGOTA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldJmtWanita = [
      "KECAMATAN",
      "DESA",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_JAMAAH_TAHLIL",
      "JUMLAH_ANGGOTA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
      "DIGIT",
    ];
    const fieldGuruK = [
      "KECAMATAN",
      "KELURAHAN",
      "DUSUN",
      "RT",
      "RW",
      "NAMA_LEMBAGA",
      "NAMA_KETUA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldMdnPerempuan = [
      "KECAMATAN",
      "KELURAHAN",
      "RT",
      "RW",
      "DUSUN",
      "NAMA",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldMbtMasjid = [
      "KECAMATAN",
      "KELURAHAN",
      "NAMA_TEMPAT_IBADAH",
      "RT",
      "RW",
      "DUSUN",
      "NAMA_PETUGAS",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fieldTmrMasjid = [
      "KECAMATAN",
      "KELURAHAN",
      "NAMA_MASJID",
      "RT",
      "RW",
      "DUSUN",
      "NAMA_KETUA_TAKMIR",
      "NIK",
      "NO_HP",
      "REK",
    ];
    const fileNameAll =
      (id === "jmtPria" && "JamaahTahlilPria_All") ||
      (id === "jmtWanita" && "JamaahTahlilWanita_All") ||
      (id === "guruKeagamaan" && "GuruKeagaaman_All") ||
      (id === "marbotMasjid" && "MarbotMasjid_All") ||
      (id === "mudinPerempuan" && "MudinPerempuan_All") ||
      (id === "takmirMasjid" && "TakmirMasjid_All");
    const fileName =
      (id === "jmtPria" && "JamaahTahlilPria") ||
      (id === "jmtWanita" && "JamaahTahlilWanita") ||
      (id === "guruKeagamaan" && "GuruKeagaaman") ||
      (id === "marbotMasjid" && "MarbotMasjid") ||
      (id === "mudinPerempuan" && "MudinPerempuan") ||
      (id === "takmirMasjid" && "TakmirMasjid");
    const fields =
      (id === "jmtPria" && fieldJmtPria) ||
      (id === "jmtWanita" && fieldJmtWanita) ||
      (id === "guruKeagamaan" && fieldGuruK) ||
      (id === "marbotMasjid" && fieldMbtMasjid) ||
      (id === "mudinPerempuan" && fieldMdnPerempuan) ||
      (id === "takmirMasjid" && fieldTmrMasjid);
    if (selectedIds.length === 0) {
      const res = await axios.get(`http://127.0.0.1:3000/members/${id}`);
      const data = res.data;
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const filteredData = data.map((item) => {
        let filteredItems = {};
        fields.forEach((field) => {
          if (item[field] !== undefined) {
            filteredItems[field] = item[field];
          }
        });
        return filteredItems;
      });
      const ws = XLSX.utils.json_to_sheet(filteredData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
      });
      const dataExcel = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(dataExcel, fileNameAll + ".xlsx");
    } else {
      await axios
        .post(`http://127.0.0.1:3000/members/${id}/download`, selectedIds)
        .then((response) => {
          const fileType =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
          const data = response.data;
          const filteredData = data.map((item) => {
            let filteredItems = {};
            fields.forEach((field) => {
              if (item[field] !== undefined) {
                filteredItems[field] = item[field];
              }
            });
            return filteredItems;
          });
          const ws = XLSX.utils.json_to_sheet(filteredData);
          const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
          const excelBuffer = XLSX.write(wb, {
            bookType: "xlsx",
            type: "array",
          });
          const dataExcel = new Blob([excelBuffer], { type: fileType });
          FileSaver.saveAs(dataExcel, fileName + ".xlsx");
        })
        .catch((err) => {
          console.log("error downloading file");
        });
    }
  };

  const handleLoading = (e)=>{
    setLoading(e)
  }

  useEffect(() => {
    getDatafromCheck();
  }, []);
  return (
    <div className="lg:w-full flex items-start justify-evenly mt-2">
      <div className="flex flex-col items-center bg-white shadow-md lg:w-11/12 w-full h-screen rounded-lg">
        <div className="w-full flex justify-evenly mb-3 items-center">
          <div className="w-1/2 flex items-end justify-center">
            <input
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              className="border-2 rounded-md w-full p-2 border-gray-300 shadow-sm"
              type="search"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="border rounded-full w-10 h-10 flex items-center justify-center"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex w-2/12 justify-evenly">
            <button
              id={menu}
              onClick={handleDownloadCsv}
              className="bg-green-400 rounded-md w-2/6 h-9 text-white flex items-center justify-evenly font-bold"
            >
              <ArrowDownTrayIcon className="w-5 h-5 font-bold" />
              CSV
            </button>
            <button
              id={menu}
              onClick={handleDownloadExcel}
              className="bg-green-400 rounded-md w-2/6 h-9 text-white flex items-center justify-evenly font-bold"
            >
              <ArrowDownTrayIcon className="w-5 h-5 font-bold" />
              XLSX
            </button>
          </div>
        </div>
        <TabHeader onTabClick={handleMenuClick} isIdCheked={selectedIds} />
        <div className={`max-w-full h-5/6  flex justify-center ${isLoading ? 'w-full overflow-hidden' : 'overflow-y-scroll' }`}>
          <Content menu={menu} search={inputSearch} onCheckbox={handleCheck} onLoad={handleLoading} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
