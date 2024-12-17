import React from "react";

const InteractionPanel = ({ feature }) => {
  return (
    <div style={{ width: "20%", padding: "1rem", borderLeft: "1px solid #ccc" }}>
      <h2>Feature Details</h2>
      {feature ? (
        <>
          <p><strong>Type:</strong> {feature.type}</p>
          {feature.name && <p><strong>Name:</strong> {feature.name}</p>}
          {feature.density && <p><strong>Density:</strong> {feature.density} people/sq mile</p>}
        </>
      ) : (
        <p>Click a polygon to view details here.</p>
      )}
    </div>
  );
};

export default InteractionPanel;
