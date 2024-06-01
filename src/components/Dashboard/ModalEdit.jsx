import React, { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import ModalEditTahlilPria from "./ModalEdit/ModalEditTahlilPria";
import ModalEditTmrMasjid from "./ModalEdit/ModalEditTmrMasjid";
import ModalEditGuruK from "./ModalEdit/ModalEditGuruK";
import ModalEditMdnPerempuan from "./ModalEdit/ModalEditMdnPerempuan";
import ModalEditMbtMasjid from "./ModalEdit/ModalEditMbtMasjid";
import ModalEditTahlilWanita from "./ModalEdit/ModalEditTahlilWanita";

const ModalEdit = ({
  tab,
  data,
  id,
  allData,
  isShow,
  onShow,
  onCheck,
  checkedIds,
  onClear,
}) => {
  return (
    <>
      {tab === "Tahlil Pria" && (
        <ModalEditTahlilPria
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
      {tab === "Tahlil Wanita" && (
        <ModalEditTahlilWanita
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
      {tab === "Takmir Masjid" && (
        <ModalEditTmrMasjid
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
      {tab === "Guru Keagamaan" && (
        <ModalEditGuruK
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
      {tab === "Mudin Perempuan" && (
        <ModalEditMdnPerempuan
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
      {tab === "Marbot Masjid" && (
        <ModalEditMbtMasjid
          tab={tab}
          data={data}
          id={id}
          allData={allData}
          isShow={isShow}
          onShow={onShow}
          onCheck={onCheck}
          onClear={onClear}
          checkedIds={checkedIds}
        />
      )}
    </>
  );
};

export default ModalEdit;
