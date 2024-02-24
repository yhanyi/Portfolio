import React, { CSSProperties } from "react";

export default function ParticlePreview() {
  const containerStyle: CSSProperties = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent", // Change to transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const iframeStyle: CSSProperties = {
    width: "75%",
    height: "75%",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #333",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="https://yeohhanyi-arknights-particles.vercel.app/"
        title="Particle Preview"
        style={iframeStyle}
      ></iframe>
    </div>
  );
}
