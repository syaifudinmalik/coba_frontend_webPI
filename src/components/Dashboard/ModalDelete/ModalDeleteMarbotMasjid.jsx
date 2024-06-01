import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";

const ModalDeleteMarbotMasjid = ({
  tab,
  data,
  id,
  allData,
  isShow,
  onShow,
  onCheck,
  checkedIds,
  onDelete,
  onClear,
  checkedItems
}) => {
  const [NamaKetua, setNamaKetua] = useState(data.NAMA_PETUGAS);
  const [selectMember, setSelectMember] = useState([]);
  useEffect(() => {
    setSelectMember(data);
  }, []);
  
  const deleteMany = async (e) => {
    try {
      await axios
        .delete(`http://127.0.0.1:3000/members/marbotMasjid/deleteMany`, {data: checkedIds})
        .then((res) => {
          onShow()
          onClear()
          allData()
        });
    } catch (error) {
      console.log("Error deleted member");
    }
  };
  return (
    <div>
      {checkedIds.length === 0 && (
        <Modal show={isShow} onClose={onShow}>
          <Modal.Header>{tab}</Modal.Header>
          <Modal.Body className="p-2 flex items-center justify-evenly flex-col">
            <HiOutlineExclamationCircle className="w-14 h-14 text-black/30" />
            <h1 className="text-lg text-black/30 mt-5 text-center">
              Are you sure you want to delete the Member ? {NamaKetua}
            </h1>
          </Modal.Body>
          <Modal.Footer className="w-full flex flex-row items-center justify-start p-0 border-l-2 border-t-0">
            <div className="w-full h-2/6 flex flex-row items-center justify-evenly m-7">
              <button
                onClick={onDelete}
                id={id}
                className="bg-red-500 rounded-md w-4/12 h-10 text-white hover:bg-red-400"
              >
                Yes, sure
              </button>
              <button
                className="rounded-md w-4/12 h-10 border-2 bg-white hover:bg-gray-100"
                onClick={()=>{
                  onShow()
                  onClear()
                }}
              >
                No, cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
      {checkedIds.length >= 1 && (
        <Modal show={isShow} onClose={onShow}>
          <Modal.Header>{tab}</Modal.Header>
          <Modal.Body className="p-2 flex items-center justify-evenly flex-col">
            <HiOutlineExclamationCircle className="w-14 h-14 text-black/30" />
            <h1 className="text-lg text-black/30 mt-5">
              Are you sure you want to delete the Member ?
            </h1>
          </Modal.Body>
          <Modal.Footer className="w-full flex flex-row items-center justify-start p-0 border-l-2 border-t-0">
            <div className="w-full h-2/6 flex flex-row items-center justify-evenly m-7">
              <button
                onClick={deleteMany}
                className="bg-red-500 rounded-md w-4/12 h-10 text-white hover:bg-red-400"
              >
                {`(${checkedIds.length})`}Yes, sure
              </button>
              <button
                className="rounded-md w-4/12 h-10 border-2 bg-white hover:bg-gray-100"
                onClick={()=>{
                  onShow()
                  onClear()
                }}
              >
                No, cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ModalDeleteMarbotMasjid;
