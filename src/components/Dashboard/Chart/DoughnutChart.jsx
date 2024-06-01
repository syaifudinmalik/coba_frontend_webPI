import React, { useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Members from "../../Datas/members.json";
import { Progress, Alert } from "flowbite-react";

const ProgressBars = ({ data }) => {
  return (
    <div className="w-3/4">
      <Progress
        className="text-white mb-1"
        progress={data[1]}
        textLabel={data[0]}
        size="sm"
        labelProgress
        color="dark"
        progressLabelPosition="outside"
        textLabelPosition="outside"
        labelText
        label="textwhite"
      />
    </div>
  );
};

const DoughnutChart = ({ title, data }) => {
  if (!data) return null;
  const [tahun, setTahun] = useState("");
  const [category, setCategory] = useState("");
  const [datas, setDatas] = useState(data);
  const datas2024 = datas.filter((item) => item.tanggalTerima.tahun === "2024");
  const datas2023 = datas.filter((item) => item.tanggalTerima.tahun === "2023");
  const datas2022 = datas.filter((item) => item.tanggalTerima.tahun === "2022");
  const datas2021 = datas.filter((item) => item.tanggalTerima.tahun === "2021");

  const tahunCat = datas
    .filter(
      (member, index, self) =>
        index ===
        self.findIndex(
          (m) => m.tanggalTerima.tahun === member.tanggalTerima.tahun
        )
    )
    .map((member) => member.tanggalTerima.tahun)
    .sort((a, b) => b - a);
  console.log(tahunCat);

  const filterDataCategory = datas.filter((item) => {
    if (category) {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(category.toLowerCase())
      );
    }
  });
  const daerah = datas
    .filter(
      (member, index, self) =>
        index ===
        self.findIndex((m) => m.alamat.kecamatan === member.alamat.kecamatan)
    )
    .map((member) => member.alamat.kecamatan)
    .sort();
  const daerahperTahun = daerah.map((d) => {
    const jumlah = datas.filter(
      (item) =>
        item.alamat.kecamatan === d &&
        (!category || item.pekerjaan === category) &&
        (!tahun || item.tanggalTerima.tahun === tahun) &&
        item.status === true
    ).length;
    return [d, jumlah];
  });
  const dataProgress = daerahperTahun.map(([nama, jumlah]) => ({
    nama,
    jumlah,
  }));
  console.log(dataProgress);
  let penerimaFilter = datas.filter(
    (item) =>
      (!category || item.pekerjaan === category) &&
      (!tahun || item.tanggalTerima.tahun === tahun) &&
      item.status === true
  ).length;

  let bukanPenerimaFilter = datas.filter(
    (item) =>
      (!category || item.pekerjaan === category) &&
      (!tahun || item.tanggalTerima.tahun === tahun) &&
      item.status === false
  ).length;

  let penerima = datas.filter((item) => item.status === true).length;

  let bukanPenerima = datas.filter((item) => item.status === false).length;
  const p = !category && !tahun ? penerima : penerimaFilter;
  const bp = !category && !tahun ? bukanPenerima : bukanPenerimaFilter;

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleTahun = (e) => {
    setTahun(e.target.value);
  };
  return (
    <div className="lg:w-9/12 w-full lg:mt-0 mt-5 h-[450px] text-sm flex flex-col items-center justify-evenly bg-white rounded-lg shadow-md">
      {/* judul */}
      <div className="flex items-center w-full justify-center h-1/6 px-5">
        <h1 className="font-bold text-center text-lg mx-5">
          Jumlah Penerima dan Bukan Penerima Insentif
          <br></br>
          {category}
        </h1>
      </div>
      {/* category */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center px-5">
          <select
            value={category}
            onChange={handleCategory}
            name=""
            id="tahunDoughnut"
            className="border border-gray-500 rounded-md py-1 text-xs"
          >
            <option value="">Semua Category</option>
            <option value="Jamaah Tahlil Pria">Jamaah Tahlil Pria</option>
            <option value="Jamaah Tahlil Wanita">Jamaah Tahlil Wanita</option>
            <option value="Takmir Masjid">Takmir Masjid</option>
            <option value="Marbot Masjid">Marbot Masjid</option>
            <option value="Guru Keagamaan">Guru Keagamaan</option>
            <option value="Mudin">Mudin</option>
          </select>
        </div>
        <div className="flex items-center justify-center px-5">
          <select
            value={tahun}
            onChange={handleTahun}
            name=""
            id="tahunDoughnut"
            className="border border-gray-500 rounded-md py-1 text-xs"
          >
            <option value="">Semua Tahun</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly h-5/6">
        {/* doughnut */}
        <div className="w-1/2 h-full p-2 flex items-center justify-center flex-1">
          <Doughnut
            data={{
              labels: ["P : " + p, "BP : " + bp],
              datasets: [
                {
                  label: title,
                  data: [p, bp],
                  backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    // "rgba(255, 159, 64, 0.2)",
                    // "rgba(255, 205, 86, 0.2)",
                    // "rgba(54, 162, 235, 0.2)",
                    // "rgba(153, 102, 255, 0.2)",
                    // "rgba(201, 203, 207, 0.2)",
                  ],
                  borderColor: [
                    "rgb(75, 192, 192)",
                    "rgb(255, 99, 132)",
                    // "rgb(255, 159, 64)",
                    // "rgb(255, 205, 86)",
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
        <div className="w-3/4 flex flex-col lg:items-center">
          <div className="lg:mb-3 lg:flex hidden">
            <h1 className="text-gray-400">Daerah Penerima</h1>
          </div>
          <div className="flex items-start justify-evenly w-full p-5">
            <div className="w-1/2 text-xs">
              {dataProgress.slice(0, 9).map((d) => (
                <ProgressBars data={[d.nama, d.jumlah]} />
              ))}
            </div>
            <div className="w-1/2 text-xs">
              {dataProgress.slice(9, 17).map((d) => (
                <ProgressBars data={[d.nama, d.jumlah]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
