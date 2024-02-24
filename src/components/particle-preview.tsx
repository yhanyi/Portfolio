import React, { CSSProperties } from "react";

export default function ParticlePreview() {
  const containerStyle: CSSProperties = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const iframeStyle: CSSProperties = {
    width: "75%",
    height: "75%",
    backgroundColor: "transparent",
    borderRadius: "8px",
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
