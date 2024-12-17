import React from "react";
import { Polygon, Popup } from "react-leaflet";

// Function for dynamic color coding
const getColor = (density) => {
  return density > 1000
    ? "#800026"
    : density > 500
    ? "#BD0026"
    : density > 200
    ? "#E31A1C"
    : density > 100
    ? "#FC4E2A"
    : density > 50
    ? "#FD8D3C"
    : "#FEB24C";
};

const PolygonLayer = ({ polygons, setSelectedFeature }) => {
  return polygons.map((polygon) => (
    <Polygon
      key={polygon.id}
      positions={polygon.coordinates}
      pathOptions={{ fillColor: getColor(polygon.density), color: "#555" }}
      eventHandlers={{
        click: () => setSelectedFeature({ type: "Polygon", ...polygon }),
      }}
    >
      <Popup>
        <div>
          <h3>{polygon.name}</h3>
          <p><strong>Density:</strong> {polygon.density} people/sq mile</p>
        </div>
      </Popup>
    </Polygon>
  ));
};

export default PolygonLayer;
