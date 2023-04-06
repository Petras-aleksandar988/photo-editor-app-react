import "./App.css";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const photoEditorOptions = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
function App() {
  const [options, setOptions] = useState(photoEditorOptions);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];

  // Handling value change for each sidebar option by passing handleSliderChange function in Slider props and  by triggering onChange event. we change only value of element that is matching with current dom element we selected.
  function handleSliderChange(e) {
    console.log(e.target.value);
    setOptions((prevOptions) => {
      return prevOptions.map((item, index) => {
        if (index !== selectedOptionIndex) return item;
        return { ...item, value: e.target.value };
      });
    });
  }
  // looping through options and returning array of property, value and the name. To use it in style we need one more return of string with a FILTER like key name.
  function getStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  }
  console.log(getStyle());

  return (
    <div className="container">
      <div className="main-image" style={getStyle()}></div>
      <div className="sidebar">
        {options.map((item, index) => {
          return (
            <Sidebar
              key={index}
              name={item.name}
              active={index === selectedOptionIndex}
              // choosing element we clicked by sending handleClick like prop in Slider component and firing onClick event
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
