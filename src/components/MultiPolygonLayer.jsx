import React from "react";
import { Polygon, Popup } from "react-leaflet";

const MultiPolygonLayer = ({ multipolygons, setSelectedFeature }) => {
  return multipolygons.map((item) =>
    item.coordinates.map((region, index) => (
      <Polygon
        key={`${item.id}-${index}`}
        positions={region}
        eventHandlers={{
          click: () => setSelectedFeature({ type: "MultiPolygon", ...item }),
        }}
      >
        <Popup>{item.name}</Popup>
      </Polygon>
    ))
  );
};

export default MultiPolygonLayer;