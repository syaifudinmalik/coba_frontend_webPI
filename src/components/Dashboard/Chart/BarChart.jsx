import React, { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const [categories, setCategories] = useState("");
  const [jmtPria, setjmtPria] = useState([]);
  const [jmtWanita, setjmtWanita] = useState([]);
  const [tmrMasjid, setTmrMasjid] = useState([]);
  const [mbtMasjid, setMbtMasjid] = useState([]);
  const [mdnPerempuan, setMdnPerempuan] = useState([]);
  const [guruK, setGuruK] = useState([]);
  useEffect(() => {
    getjmtPria();
    getjmtWanita();
    gettmrMasjid();
    getmbtMasjid();
    getmdnPerempuan();
    getguruK();
  }, []);
  const getjmtPria = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/jmtPria");
    setjmtPria(res.data);
  };
  const getjmtWanita = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/jmtWanita");
    setjmtWanita(res.data);
  };
  const gettmrMasjid = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/takmirMasjid");
    setTmrMasjid(res.data);
  };
  const getmbtMasjid = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/marbotMasjid");
    setMbtMasjid(res.data);
  };
  const getmdnPerempuan = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/mudinPerempuan");
    setMdnPerempuan(res.data);
  };
  const getguruK = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/guruKeagamaan");
    setGuruK(res.data);
  };
  const withRek_jmtPria = jmtPria.filter((item) => item.REK !== undefined).length;
  const withoutRek_jmtPria = jmtPria.filter((item) => item.REK === undefined).length;
  const withRek_jmtWanita = jmtWanita.filter((item) => item.REK !== undefined).length;
  const withoutRek_jmtWanita = jmtWanita.filter((item) => item.REK === undefined).length;
  const withRek_tmrMasjid = tmrMasjid.filter((item) => item.REK !== undefined).length;
  const withoutRek_tmrMasjid = tmrMasjid.filter((item) => item.REK === undefined).length;
  const withRek_mbtMasjid = mbtMasjid.filter((item) => item.REK !== undefined).length;
  const withoutRek_mbtMasjid = mbtMasjid.filter((item) => item.REK === undefined).length;
  const withRek_mdnPerempuan = mdnPerempuan.filter((item) => item.REK !== undefined).length;
  const withoutRek_mdnPerempuan = mdnPerempuan.filter((item) => item.REK === undefined).length;
  const withRek_guruK = guruK.filter((item) => item.REK !== undefined).length;
  const withoutRek_guruK = guruK.filter((item) => item.REK === undefined).length;
  const handleCategory = (e) => {
    setCategories(e.target.value);
  };
  return (
    <div className="bar w-full h-[300px] lg:w-[1000px] lg:h-[700px] text-sm bg-white rounded-lg shadow-md flex items-center justify-evenly flex-col px-6">
      <div>
        <h1 className="text-lg font-bold">Penerima Insentif</h1>
      </div>
      {/* <div className="flex justify-between w-full h-10">
        <h1 className="font-bold">Tahun {tahun}</h1>
        <select
          name=""
          id=""
          onChange={handleTahun}
          className="cursor-pointer border h-3/4 rounded-md border-gray-500 text-xs"
        >
          <option value="">Semua Tahun</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div> */}
      {/* <div className="flex justify-between w-full h-10">
        <h1 className="font-bold">{categories}</h1>
        <select
          name=""
          id=""
          onChange={handleCategory}
          className="cursor-pointer border h-3/4 rounded-md border-gray-500 text-xs"
        >
          <option value="">Semua Category</option>
          <option value="Jamaah Tahlil Pria">Jama'ah Tahlil Pria</option>
          <option value="Jamaah Tahlil Wanita">Jama'ah Tahlil Wanita</option>
          <option value="Jamaah Tahlil Pria">Takmir Masjid</option>
          <option value="Jamaah Tahlil Pria">Marbot Masjid</option>
          <option value="Jamaah Tahlil Pria">Guru Keagamaan</option>
          <option value="Jamaah Tahlil Pria">Mudin</option>
        </select>
      </div> */}
      <Bar
        data={{
          labels: ["Jamaah Tahlil Pria", "Jamaah Tahlil Wanita","Takmir Masjid","Marbot Masjid","Guru Keagamaan", "Mudin"],
          datasets: [
            {
              label: "With REK",
              data: [withRek_jmtPria,withRek_jmtWanita,withRek_tmrMasjid,withRek_mbtMasjid,withRek_guruK,withRek_mdnPerempuan],
              backgroundColor: [
                // "rgba(255, 99, 132, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
                // "rgba(255, 205, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                // "rgb(255, 99, 132)",
                // "rgb(255, 159, 64)",
                // "rgb(255, 205, 86)",
                // "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                // "rgb(153, 102, 255)",
                // "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
            {
              label: "Without REK",
              data: [withoutRek_jmtPria,withoutRek_jmtWanita,withoutRek_tmrMasjid,withoutRek_mbtMasjid,withoutRek_guruK,withoutRek_mdnPerempuan],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
                // "rgba(255, 205, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(54, 162, 235, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                // "rgb(255, 159, 64)",
                // "rgb(255, 205, 86)",
                // "rgb(75, 192, 192)",
                // "rgb(54, 162, 235)",
                // "rgb(153, 102, 255)",
                // "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
