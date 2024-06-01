import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  Polyline,
  SVGOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, L } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import icon from "../../../public/placeholder.png";
import icon2 from "../../../public/location-circle.png";
import kecamatanDatas from "../Datas/kecamatanDatas.json";

const GeoLocation = () => {
  const position = [-7.2274666, 111.6295315];
  const bounds = [
    [-7.1320558506202385, 111.9528894402374],
    [-7.249570571106034, 111.9633607840046],
    [-7.206315068258565, 111.9269685728792],
    [-7.234244292018018, 112.00473117495376],
  ];
  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [50, 50],
  });
  const centerKecamatans = kecamatanDatas.features.filter(
    (item) => item.geometry
  );
  const customIconText = (text, size, icon, iconSize) => {
    return divIcon({
      html: `<div class="content-marker"><img class="content-image-${iconSize}" src='${icon}'></img>${text}</div>`,
      className: `text-${size} font-bold flex flex-col items-center justify-center`,
      iconSize: [10, 10],
    });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 h-screen">
      <div className="bg-white h-full w-11/12 flex flex-col items-center justify-start">
        <h1 className="font-bold text-lg">Geo Lokasi</h1>
        <div className="w-full flex items-center justify-center">
          <div className="bg-black/65 text-white w-1/4 h-48 z-50 fixed top-8 right-24 rounded-md shadow-md backdrop-blur-sm">
          </div>
          <MapContainer
            center={position}
            zoom={10}
            style={{ width: `97%`, height: `95vh` }}
            className="z-10"
          >
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=bPp9h1Q2pKCc9LYjsC0T"
            />
            {/* Nama Kota/Kabupaten */}
            {/* <Marker
            position={position}
            icon={customIconText("Bojonegoro", "lg", icon, "1")}
          >
            <Popup>Bojonegoro</Popup>
          </Marker> */}
            {/* Nama Kecamatan */}
            {centerKecamatans.map((item, index) => (
              <Marker
                key={index}
                position={item.geometry.center}
                icon={customIconText(item.properties.name, "sm", icon2, "2")}
              >
                <Popup>
                  <div>
                    <div>
                      <h1 className="font-bold text-center">
                        {item.properties.name}
                      </h1>
                      <hr />
                    </div>
                    <br />
                    <div className="flex items-center justify-center flex-row">
                      <div>
                        <div>Provinsi</div>
                        <div>Kabupaten</div>
                      </div>
                      <div>
                        <div>
                          <span className="flex-1 mx-5">:</span>
                          {item.properties.provinsi}
                        </div>
                        <div>
                          <span className="flex-1 mx-5">:</span>
                          {item.properties.kabupaten}
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="flex items-center justify-center flex-row">
                      <div className="flex flex-1 items-start justify-center flex-col">
                        <div>Luas</div>
                        <div>Populasi</div>
                        <div>Kelurahan</div>
                      </div>
                      <div>
                        <div>
                          <span className="flex-1 mx-5">:</span>
                          {item.properties.luas} km<sup>2</sup>
                        </div>
                        <div>
                          <span className="flex-1 mx-5">:</span>
                          {item.properties.populasi} jiwa
                        </div>
                        <div>
                          <span className="flex-1 mx-5">:</span>
                          {item.properties.kelurahan} desa
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Area Kecamatan */}
            {kecamatanDatas.features.map((state, index) => {
              const coordinates = state.geometry.coordinates.map((item) => [
                item,
              ]);
              console.log(coordinates);
              return (
                <Polygon
                  key={index}
                  pathOptions={{
                    fillColor: "purple",
                    color: "purple",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    click: (e) => {
                      console.log(e.target);
                    },
                  }}
                />
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default GeoLocation;
