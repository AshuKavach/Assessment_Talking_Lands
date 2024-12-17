import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { PointLayer, PolygonLayer, MultiPolygonLayer } from "./Layers";
import { pointData, polygonData, multipolygonData } from "./mockData";

const MapView = () => {
  return (
    <MapContainer center={[38.8951, -77.0364]} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <PointLayer points={pointData} />
      <PolygonLayer polygons={polygonData} />
      <MultiPolygonLayer multipolygons={multipolygonData} />
    </MapContainer>
  );
};

export default MapView;
