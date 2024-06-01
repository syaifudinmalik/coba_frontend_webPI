import React, { useEffect, useState, useMemo } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Members from "../../Datas/members.json";
import axios from "axios";

const LineChart = () => {
  const [category, setCategory] = useState("");
  const [jmtPria, setjmtPria] = useState([]);
  const [tmrMasjid, setTmrMasjid] = useState([]);
  const [mbtMasjid, setMbtMasjid] = useState([]);
  const [mdnPerempuan, setMdnPerempuan] = useState([]);
  const [guruK, setGuruK] = useState([]);

  const getMembersJmtPria = async () => {
    const res = await axios.get("http://127.0.0.1:3000/members/jmtPria");
    setjmtPria(res.data);
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

  const daerahJmtPria = jmtPria
    .filter(
      (member, index, self) =>
        index === self.findIndex((m) => m.KECAMATAN === member.KECAMATAN)
    )
    .map((member) => member.KECAMATAN)
    .sort();

  const dataPenerimaJmtpria = useMemo(() => {
    return daerahJmtPria.map((d) => {
      const jumlah = jmtPria.filter(
        (item) => item.KECAMATAN === d && item.REK !== undefined
      ).length;
      return jumlah;
    });
  });
  const [dataPenerima, setDataPenerima] = useState([]);
  const [daerah, setDaerah] = useState();

  const ubahData = async () => {
    setDataPenerima(dataPenerimaJmtpria);
  };

  const [tahun, setTahun] = useState("2024");

  const handleCategory = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "") {
      setDataPenerima(dataPenerimaJmtpria);
    }
  };
  useEffect(() => {
    getMembersJmtPria();
    gettmrMasjid();
    getmbtMasjid();
    getmdnPerempuan();
    getguruK();
  }, []);
  return (
    <div className="bar w-full h-[300px] mt-5 lg:mt-0 lg:w-[1000px] lg:h-[700px] text-sm bg-white rounded-lg shadow-md flex items-center justify-evenly flex-col px-6">
      <div>
        <h1 className="text-lg font-bold">Daerah Penerima</h1>
      </div>
      <div className="flex justify-between w-full h-10">
        <h1 className="font-bold"></h1>
        <select
          name=""
          id=""
          value={category}
          onChange={handleCategory}
          className="cursor-pointer border h-3/4 rounded-md border-gray-500 text-xs"
        >
          <option value="">Semua Category</option>
          <option value="Jamaah Tahlil Pria">Jama'ah Tahlil Pria</option>
          <option value="Jamaah Tahlil Wanita">Jama'ah Tahlil Wanita</option>
          <option value="Takmir Masjid">Takmir Masjid</option>
          <option value="Marbot Masjid">Marbot Masjid</option>
          <option value="Guru Keagamaan">Guru Keagamaan</option>
          <option value="Mudin Perempuan">Mudin Perempuan</option>
        </select>
      </div>
      <Line
        data={{
          labels: daerahJmtPria,
          datasets: [
            {
              label: "Penerima",
              data: dataPenerimaJmtpria,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
