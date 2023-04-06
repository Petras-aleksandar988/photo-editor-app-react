import React from "react";

export default function Slider({ handleChange, min, max, value }) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        onChange={handleChange}
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}
