import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "flowbite-react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const ModalEditTmrMasjid = ({
  tab,
  data,
  id,
  allData,
  isShow,
  onShow,
  onCheck,
  checkedIds,
  onClear
}) => {
  const [dataIds, setDataIds] = useState([]);
  const [NAMA_MASJID, setNamaJamaah] = useState(data.NAMA_MASJID);
  const [NAMA_KETUA_TAKMIR, setNamaKetua] = useState(data.NAMA_KETUA_TAKMIR);
  const [RT, setRT] = useState(data.RT);
  const [RW, setRW] = useState(data.RW);
  const [KECAMATAN, setKecamatan] = useState(data.KECAMATAN);
  const [KELURAHAN, setDesa] = useState(data.KELURAHAN);
  const [DUSUN, setDusun] = useState(data.DUSUN);
  const [NIK, setNik] = useState(data.NIK);
  const [NO_HP, setNohp] = useState(data.NO_HP);
  const [REK, setRek] = useState(data.REK);
  const [curr, setCurr] = useState(0);
  const getById = async (e) => {
    const res = await axios.post(
      `http://127.0.0.1:3000/members/takmirMasjid/download`,
      checkedIds
    );
    setDataIds(res.data);
  };
  useEffect(() => {
    getById();
  }, [checkedIds]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(`http://127.0.0.1:3000/members/takmirMasjid/edit/${id}`, {
          KECAMATAN,
          KELURAHAN,
          NAMA_MASJID,
          RT,
          RW,
          DUSUN,
          NAMA_KETUA_TAKMIR,
          NIK,
          NO_HP,
          REK,
        })
        .then((res) => {
          // if(res.status(201))
          if (res.data.status) {
            allData;
            console.log("succesfully");
            onShow();
            onClear()
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (id, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDataIds((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, [name]: value } : item
      )
    );
  };
  const handleUpdateMany = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://127.0.0.1:3000/members/takmirMasjid/editMany`, dataIds)
        .then((res) => {
          if (res.data.status) {
            console.log("succesfully");
            allData;
            onShow();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const prevSlide = () => {
    setCurr((curr - 1 + dataIds.length) % dataIds.length);
  };
  const nextSlide = () => {
    setCurr((curr + 1) % dataIds.length);
  };
  return (
    <div>
      {checkedIds.length === 0 && (
        <Modal show={isShow} onClose={onShow}>
          <Modal.Header>{tab}</Modal.Header>
          <form className="flex" onSubmit={handleUpdate}>
            <Modal.Body>
              <div className="space-y-2 max-h-full">
                <div className="flex flex-col">
                  <label htmlFor="inputNama">NIK</label>
                  <input
                    type="number"
                    value={NIK}
                    onChange={(e) =>
                      e.target.value.length <= 16 && setNik(e.target.value)
                    }
                    className="border-1 rounded-md"
                    placeholder="Masukkan NIK..."
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inputNama">Nama Ketua</label>
                  <input
                    type="text"
                    value={NAMA_KETUA_TAKMIR}
                    onChange={(e) => setNamaKetua(e.target.value)}
                    className="border-1 rounded-md"
                    placeholder="Nama Ketua..."
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inputNama">Nama Masjid</label>
                  <input
                    type="text"
                    value={NAMA_MASJID}
                    onChange={(e) => setNamaJamaah(e.target.value)}
                    className="border-1 rounded-md"
                    placeholder="Nama Masjid..."
                  />
                </div>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="inputNama">Kecamatan</label>
                    <input
                      type="text"
                      value={KECAMATAN}
                      onChange={(e) => setKecamatan(e.target.value)}
                      className="border-1 rounded-md w-11/12"
                      placeholder="Nama Kecamatan..."
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="inputNama">Desa/Kelurahan</label>
                    <input
                      type="text"
                      value={KELURAHAN}
                      onChange={(e) => setDesa(e.target.value)}
                      className="border-1 rounded-md w-11/12"
                      placeholder="Nama Desa/Kelurahan..."
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="inputNama">Dusun</label>
                    <input
                      type="text"
                      value={DUSUN}
                      onChange={(e) => setDusun(e.target.value)}
                      className="border-1 rounded-md w-11/12"
                      placeholder="Nama Dusun..."
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="inputNama">RT</label>
                    <input
                      type="number"
                      value={RT}
                      onChange={(e) =>
                        e.target.value.length <= 3 && setRT(e.target.value)
                      }
                      className="border-1 rounded-md w-11/12"
                      placeholder="RT..."
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="inputNama">RW</label>
                    <input
                      type="number"
                      value={RW}
                      onChange={(e) =>
                        e.target.value.length <= 3 && setRW(e.target.value)
                      }
                      className="border-1 rounded-md w-11/12"
                      placeholder="RW..."
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inputNama">NO HP</label>
                  <input
                    type="number"
                    value={NO_HP}
                    onChange={(e) =>
                      e.target.value.length <= 12 && setNohp(e.target.value)
                    }
                    className="border-1 rounded-md"
                    placeholder="No HP..."
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="inputNama">No Rekening</label>
                  <input
                    type="number"
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
            </Modal.Body>
            <Modal.Footer className="flex flex-col w-1/4 items-center justify-start p-0 border-l-2 border-t-0">
              <div className="w-full h-2/6 flex flex-col items-center justify-evenly">
                <button
                  type="submit"
                  className="bg-green-500 rounded-md w-3/4 h-10 text-white hover:bg-green-400"
                >
                  Update
                </button>
                <button
                  className="rounded-md w-3/4 h-10 border-2 bg-white hover:bg-gray-100"
                  onClick={onShow}
                >
                  Cancel
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      )}
      {checkedIds.length >= 1 && (
        <Modal show={isShow} onClose={onShow}>
          <Modal.Header>{tab}</Modal.Header>
          <form className="flex" onSubmit={handleUpdateMany}>
            <Modal.Body className="max-w-lg h-[37rem] p-2 overflow-hidden relative">
              {dataIds.map((data, index) => (
                <div
                  key={index}
                  className={`space-y-2 max-h-full mb-10 ${
                    index === curr ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="flex flex-col">
                    <label htmlFor="inputNama">NIK</label>
                    <input
                      type="number"
                      name="NIK"
                      value={data.NIK}
                      onChange={(e) =>
                        e.target.value.length <= 16 &&
                        handleInputChange(data._id, e)
                      }
                      className="border-1 rounded-md"
                      placeholder="Masukkan NIK..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputNama">Nama Ketua</label>
                    <input
                      type="text"
                      name="NAMA_KETUA_TAKMIR"
                      value={data.NAMA_KETUA_TAKMIR}
                      onChange={(e) => handleInputChange(data._id, e)}
                      className="border-1 rounded-md"
                      placeholder="Nama Ketua..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputNama">Nama Masjid</label>
                    <input
                      type="text"
                      name="NAMA_MASJID"
                      value={data.NAMA_MASJID}
                      onChange={(e) => handleInputChange(data._id, e)}
                      className="border-1 rounded-md"
                      placeholder="Nama Masjid..."
                    />
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="inputNama">Kecamatan</label>
                      <input
                        type="text"
                        name="KECAMATAN"
                        value={data.KECAMATAN}
                        onChange={(e) => handleInputChange(data._id, e)}
                        className="border-1 rounded-md w-11/12"
                        placeholder="Nama Kecamatan..."
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="inputNama">Desa/Kelurahan</label>
                      <input
                        type="text"
                        name="KELURAHAN"
                        value={data.KELURAHAN}
                        onChange={(e) => handleInputChange(data._id, e)}
                        className="border-1 rounded-md w-11/12"
                        placeholder="Nama Desa/Kelurahan..."
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="inputNama">Dusun</label>
                      <input
                        type="text"
                        name="DUSUN"
                        value={data.DUSUN}
                        onChange={(e) => handleInputChange(data._id, e)}
                        className="border-1 rounded-md w-11/12"
                        placeholder="Nama Dusun..."
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="inputNama">RT</label>
                      <input
                        type="number"
                        name="RT"
                        value={data.RT}
                        onChange={(e) =>
                          e.target.value.length <= 3 &&
                          handleInputChange(data._id, e)
                        }
                        className="border-1 rounded-md w-11/12"
                        placeholder="RT..."
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="inputNama">RW</label>
                      <input
                        type="number"
                        name="RW"
                        value={data.RW}
                        onChange={(e) =>
                          e.target.value.length <= 3 &&
                          handleInputChange(data._id, e)
                        }
                        className="border-1 rounded-md w-11/12"
                        placeholder="RW..."
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputNama">NO HP</label>
                    <input
                      type="number"
                      name="NO_HP"
                      value={data.NO_HP}
                      onChange={(e) =>
                        e.target.value.length <= 12 &&
                        handleInputChange(data._id, e)
                      }
                      className="border-1 rounded-md"
                      placeholder="No HP..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="inputNama">No Rekening</label>
                    <input
                      type="number"
                      name="REK"
                      value={data.REK}
                      maxLength={3}
                      onChange={(e) =>
                        e.target.value.length <= 10 &&
                        handleInputChange(data._id, e)
                      }
                      className="border-1 rounded-md"
                      placeholder="No Rekening..."
                    />
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                  {dataIds.map((_, i) => (
                    <div
                      className={`transition-all w-2 h-2  rounded-full ${
                        curr === i ? "w-3 h-3 bg-black/30" : "bg-black/10"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex flex-col w-1/4 items-center justify-start p-0 border-l-2 border-t-0">
              <div className="w-full h-2/6 flex flex-col items-center justify-evenly">
                <button
                  type="submit"
                  className="bg-green-500 rounded-md w-3/4 h-10 text-white hover:bg-green-400"
                >
                  Update
                </button>
                <button
                  className="rounded-md w-3/4 h-10 border-2 bg-white hover:bg-gray-100"
                  onClick={(e)=>{
                    e.preventDefault()
                    onShow()
                    onClear()
                  }}
                >
                  Cancel
                </button>
                <div className="relative  top-1/2 flex items-center justify-between p-4 w-full h-7">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevSlide();
                    }}
                    className="p-1 rounded-full shadow bg-black/10 text-gray-800 hover:bg-white"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </button>
                  <div>{`${curr + 1}/${dataIds.length}`}</div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextSlide();
                    }}
                    className="p-1 rounded-full shadow bg-black/10 text-gray-800 hover:bg-white"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ModalEditTmrMasjid;
