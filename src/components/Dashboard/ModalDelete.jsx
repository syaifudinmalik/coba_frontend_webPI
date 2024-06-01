import React from "react";
import ModalDeleteTahlilPria from "./ModalDelete/ModalDeleteTahlilPria";
import ModalDeleteTahlilWanita from "./ModalDelete/ModalDeleteTahlilWanita";
import ModalDeleteTakmirMasjid from "./ModalDelete/ModalDeleteTakmirMasjid";
import ModalDeleteMarbotMasjid from "./ModalDelete/ModalDeleteMarbotMasjid";
import ModalDeleteMudinPerempuan from "./ModalDelete/ModalDeleteMudinPerempuan";
import ModalDeleteGuruK from "./ModalDelete/ModalDeleteGuruK";

const ModalDelete = ({
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
  return (
    <>
      {tab === "Tahlil Pria" && (
        <ModalDeleteTahlilPria tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
      {tab === "Tahlil Wanita" && (
        <ModalDeleteTahlilWanita tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
      {tab === "Takmir Masjid" && (
        <ModalDeleteTakmirMasjid tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
      {tab === "Marbot Masjid" && (
        <ModalDeleteMarbotMasjid tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
      {tab === "Mudin Perempuan" && (
        <ModalDeleteMudinPerempuan tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
      {tab === "Guru Keagamaan" && (
        <ModalDeleteGuruK tab={tab} isShow={isShow} onShow={onShow} data={data} id={id} allData={allData} checkedIds={checkedIds} onCheck={onCheck} onDelete={onDelete} onClear={onClear} checkedItems={checkedItems} />
      )}
    </>
  );
};

export default ModalDelete;
