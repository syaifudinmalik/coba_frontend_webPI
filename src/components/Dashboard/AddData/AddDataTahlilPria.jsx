import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const AddDataTahlilPria = ({ title }) => {
  const [NAMA_JAMAAH, setNamaJamaah] = useState("");
  const [NAMA_KETUA, setNamaKetua] = useState("");
  const [RT, setRT] = useState("");
  const [RW, setRW] = useState("");
  const [KECAMATAN, setKecamatan] = useState("");
  const [DESA, setDesa] = useState("");
  const [DUSUN, setDusun] = useState("");
  const [JUMLAH_ANGGOTA, setJumlahAnggota] = useState("");
  const [NIK, setNik] = useState("");
  const [NO_HP, setNohp] = useState("");
  const [REK, setRek] = useState("");
  const [rekaps, setRekap] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});

  const getRekap = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:3000/members/rekap`);
      setRekap(res.data);
      const options = res.data.reduce((acc, rekap) => {
        if (!acc[rekap.KECAMATAN]) {
          acc[rekap.KECAMATAN] = [];
        }
        if (!acc[rekap.KECAMATAN].includes(rekap.NAMA_DESA)) {
          acc[rekap.KECAMATAN].push(rekap.NAMA_DESA);
        }
        return acc;
      }, {});
      setSelectedOption(options);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://127.0.0.1:3000/members/saveTahlilPria`, {
          KECAMATAN,
          DESA,
          DUSUN,
          RT,
          RW,
          NAMA_JAMAAH,
          JUMLAH_ANGGOTA,
          NAMA_KETUA,
          NIK,
          NO_HP,
          REK,
        })
        .then((res) => {
          if (res.data.status) {
            location.reload();
            console.log("succesfully");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setKecamatan(selectedValue);
    setDesa("");
  };

  useEffect(() => {
    getRekap();
  }, []);

  useEffect(() => {
    if (KECAMATAN && selectedOption[KECAMATAN] && selectedOption[KECAMATAN].length > 0) {
      setDesa(selectedOption[KECAMATAN][0]);
    }
  }, [KECAMATAN, selectedOption]);

  return (
    <div>
      <h1 className="font-bold text-xl text-center m-3">Tambah Data {title}</h1>
      <form
        className="w-11/12 lg:w-full h-full px-10 flex flex-row"
        onSubmit={handleSave}
      >
        <div className="flex flex-col w-full h-full gap-7">
          <div>
            <div className="space-y-7 h-5/6 flex flex-col">
              <div className="flex flex-col ">
                <label htmlFor="inputNik">NIK</label>
                <input
                  type="number"
                  value={NIK}
                  id="inputNik"
                  onChange={(e) =>
                    e.target.value.length <= 16 && setNik(e.target.value)
                  }
                  className="border-1 rounded-md"
                  placeholder="Masukkan NIK..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputNama">Nama Ketua</label>
                <input
                  type="text"
                  id="inputNama"
                  value={NAMA_KETUA}
                  onChange={(e) => setNamaKetua(e.target.value)}
                  className="border-1 rounded-md"
                  placeholder="Nama Ketua..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputJamaah">Nama Jamaah</label>
                <input
                  type="text"
                  id="inputJamaah"
                  value={NAMA_JAMAAH}
                  onChange={(e) => setNamaJamaah(e.target.value)}
                  className="border-1 rounded-md"
                  placeholder="Nama Jamaah..."
                  required
                />
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-col flex-1">
                  <label htmlFor="inputKecamatan">Kecamatan</label>
                  <select
                    name=""
                    id="inputKecamatan"
                    value={KECAMATAN}
                    className="rounded-md w-11/12"
                    onChange={handleSelectChange}
                  >
                    {Object.keys(selectedOption).map((kecamatan, index) => (
                      <option key={index} value={kecamatan}>
                        {kecamatan}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="inputKelurahan">Desa/Kelurahan</label>
                  <select
                    name=""
                    id="inputKelurahan"
                    value={DESA}
                    className="rounded-md w-11/12"
                    onChange={(e) => setDesa(e.target.value)}
                  >
                    {KECAMATAN && selectedOption[KECAMATAN]
                      ? selectedOption[KECAMATAN].map((kelurahan, index) => (
                          <option value={kelurahan} key={index}>
                            {kelurahan}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="inputDusun">Dusun</label>
                  <input
                    type="text"
                    value={DUSUN}
                    id="inputDusun"
                    onChange={(e) => setDusun(e.target.value)}
                    className="border-1 rounded-md w-11/12"
                    placeholder="Nama Dusun..."
                  />
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-col flex-1">
                  <label htmlFor="inputRT">RT</label>
                  <input
                    type="number"
                    value={RT}
                    id="inputRT"
                    onChange={(e) =>
                      e.target.value.length <= 3 && setRT(e.target.value)
                    }
                    className="border-1 rounded-md w-11/12"
                    placeholder="RT..."
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="inputRW">RW</label>
                  <input
                    type="number"
                    value={RW}
                    id="inputRW"
                    onChange={(e) =>
                      e.target.value.length <= 3 && setRW(e.target.value)
                    }
                    className="border-1 rounded-md w-11/12"
                    placeholder="RW..."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputNoHp">NO HP</label>
                <input
                  type="number"
                  value={NO_HP}
                  id="inputNoHp"
                  onChange={(e) =>
                    e.target.value.length <= 12 && setNohp(e.target.value)
                  }
                  className="border-1 rounded-md"
                  placeholder="No HP..."
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputJmlAnggota">Jumlah Anggota</label>
                <input
                  type="number"
                  value={JUMLAH_ANGGOTA}
                  id="inputJmlAnggota"
                  onChange={(e) => setJumlahAnggota(e.target.value)}
                  className="border-1 rounded-md"
                  placeholder="Jumlah Anggota..."
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inputRek">No Rekening</label>
                <input
                  type="number"
                  id="inputRek"
                  value={REK}
                  maxLength={3}
                  onChange={(e) =>
                    e.target.value.length <= 10 && setRek(e.target.value)
                  }
                  className="border-1 rounded-md"
                  placeholder="No Rekening..."
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-black text-white rounded-md w-16 h-10 text-lg"
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDataTahlilPria;
