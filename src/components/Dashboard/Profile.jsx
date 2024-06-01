import React from "react";
import Members from "../Datas/members.json";
import { Card, Typography, checkbox } from "@material-tailwind/react";

function Profile(props) {
  const categories = Members.filter((member,index,self)=>
    index === self.findIndex(m =>(
      m.pekerjaan === member.pekerjaan
    ))
  ).map(member => member.pekerjaan)

  const sortData = Members.sort((a,b)=>a.nama.localeCompare(b.nama,'en',{sensitivity:'base'}))
  
  const statusTakmir = Members.filter((member) => 
    member.pekerjaan === "Takmir Masjid" && member.status === true
  )
  const statusMarbot = Members.filter((member) => 
    member.pekerjaan === "Marbot Masjid" && member.status === true
  )
  const statusMudin = Members.filter((member) => 
    member.pekerjaan === "Mudin" && member.status === true
  )
  const statusGuru = Members.filter((member) => 
    member.pekerjaan === "Guru Keagamaan" && member.status === true
  )
  const top5Data = sortData.slice(0,5)
  return (
    <div>
      <div>
        <Card className="w-full h-full shadow-none">
          <table className="w-full min-w-max text-left shadow-md rounded-md">
            <thead className="bg-gray-200 rounded-md">
              <tr className="rounded-md">
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    No
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Nama
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    NIK
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Pekerjaan
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Desa
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Kecamatan
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Kabupaten
                  </Typography>
                </th>
                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Tanggal
                  </Typography>
                </th> */}
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography className="font-normal leading-none opacity-70">
                    Status
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {top5Data.map((member, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.nama}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.nik}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.pekerjaan}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.alamat.desa}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.alamat.kecamatan}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.alamat.kabupaten}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {member.status?"Penerima":"Bukan Penerima"}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <div>
          <p>Category Pekerjaan: {`${categories}, `}</p>
          <p>Jumlah status Marbot Masjid: {statusMarbot.length}</p>
          <p>Jumlah status Takmir Masjid: {statusTakmir.length}</p>
          <p>Jumlah status Mudin: {statusMudin.length}</p>
          <p>Jumlah status Guru Keagamaan: {statusGuru.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
