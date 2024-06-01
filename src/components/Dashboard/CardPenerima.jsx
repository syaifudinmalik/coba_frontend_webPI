import React, { useEffect, useState } from "react";
import Members from "../Datas/members.json";
import axios from "axios";

const statusJmtWanita = Members.filter(
  (member) =>
    member.pekerjaan === "Jamaah Tahlil Wanita" && member.status === true
);


const CardPenerima = () => {
  const [jmtPria,setjmtPria] = useState([])
  const [jmtWanita,setjmtWanita] = useState([])
  const [tmrMasjid,setTmrMasjid] = useState([])
  const [guruK,setGuruK] = useState([])
  const [mdnPerempuan,setMdnPerempuan] = useState([])
  const [mbtMasjid,setMbtMasjid] = useState([])
  useEffect(()=>{
    getMembersJmtPria()
    getMembersJmtWanita()
    getMembersTmrMasjid()
    getMembersGuruK()
    getMembersMdnPerempuan()
    getMembersMbtMasjid()
  })
  const getMembersJmtPria = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/jmtPria");
    setjmtPria(res.data);
  }
  const getMembersJmtWanita = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/jmtWanita");
    setjmtWanita(res.data);
  }
  const getMembersTmrMasjid = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/takmirMasjid");
    setTmrMasjid(res.data);
  }
  const getMembersGuruK = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/guruKeagamaan");
    setGuruK(res.data);
  }
  const getMembersMdnPerempuan = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/mudinPerempuan");
    setMdnPerempuan(res.data);
  }
  const getMembersMbtMasjid = async()=>{
    const res = await axios.get("http://127.0.0.1:3000/members/marbotMasjid");
    setMbtMasjid(res.data);
  }
  const Rek = jmtPria.map((item) => item.REK);
  const withRek_jmtPria = Rek.filter((item) => item !== undefined);
  const penerimas = [
    {
      category: "Jamaah Tahlil Pria",
      jumlahPenerima: jmtPria.length,
    },
    {
      category: "Jamaah Tahlil Wanita",
      jumlahPenerima: jmtWanita.length,
    },
    {
      category: "Takmir Masjid",
      jumlahPenerima: tmrMasjid.length,
    },
    {
      category: "Marbot Masjid",
      jumlahPenerima: mbtMasjid.length,
    },
    {
      category: "Guru Keagamaan",
      jumlahPenerima: guruK.length,
    },
    {
      category: "Mudin Perempuan",
      jumlahPenerima: mdnPerempuan.length,
    },
  ];
  return (
    <div className="penerima-insentif lg:w-full h-[200px] lg:h-32 grid grid-cols-3 lg:flex gap-1 items-center justify-evenly p-3 w-full bg-gray-200">
      {penerimas.map((penerima, index) => (
        <div
          key={index}
          className="bg-white h-20 p-3 rounded-md lg:w-1/6 lg:h-3/4 lg:mx-2 shadow-md lg:p-3"
        >
          <h1 className="font-bold lg:text-base text-xs">
            {penerima.category}
          </h1>
          <p>{penerima.jumlahPenerima}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPenerima;
