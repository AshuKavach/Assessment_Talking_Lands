import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const PointLayer = ({ points, setSelectedFeature }) => {
  return points.map((point) => (
    <Marker
      key={point.id}
      position={[point.lat, point.lng]}
      icon={customIcon}
      eventHandlers={{
        click: () => setSelectedFeature({ type: "Marker", ...point }),
      }}
    >
      <Popup>
        <div>
          <h3>{point.title}</h3>
          <p><strong>Coordinates:</strong> {point.lat}, {point.lng}</p>
        </div>
      </Popup>
    </Marker>
  ));
};

export default PointLayer;
