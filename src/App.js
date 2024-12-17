import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import PointLayer from "./components/PointLayer";
import PolygonLayer from "./components/PolygonLayer";
import InteractionPanel from "./components/InteractionPanel";
import { polygonData, pointData } from "./mockData";

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      {/* Map Container */}
      <MapContainer
        center={[39.8283, -98.5795]} // Centered on the USA
        zoom={4}
        style={{ height: "100vh", width: "80%" }}
      >
        {/* Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker Pins */}
        <PointLayer points={pointData} setSelectedFeature={setSelectedFeature} />

        {/* Polygons */}
        <PolygonLayer
          polygons={polygonData}
          setSelectedFeature={setSelectedFeature}
        />
      </MapContainer>

      {/* Feature Interaction Panel */}
      <InteractionPanel feature={selectedFeature} />
    </div>
  );
};

export default App;
