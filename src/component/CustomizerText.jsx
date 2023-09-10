import React, { useState, useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { ChromePicker } from "react-color";
import TextTshirt from "./TextTshirt";
import Button from "../Button";
function CustomizerText() {
  const [text, setText] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("Arial");
  const inputRef = useRef(null);
  const snap = useSnapshot(state);

  const handleTextChange = (event) => {
    setText(event.target.value);
    console.log("hellloooo");
  };

  const handleAddText = () => {
    if (text) {
      state.textDecal.content = text;
      console.log(text,"hiiii");
    }
  };

  const handleColorChange = (color) => {
    state.textDecal.textcolor = color.hex;
  };

  const handleColorButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handlePositionUpdate = (axis, direction) => {
    const newPosition = [...state.textDecal.position];
    if (axis === 0) {
      newPosition[0] -= direction;
    } else if (axis === 1) {
      newPosition[1] += direction;
    } else if (axis === 2) {
      newPosition[2] += direction;
    }
    state.textDecal.position = newPosition.slice(); // Update the position state
  };

  const handleFontSizeUpdate = (direction) => {
    state.textDecal.fontSize += direction * 0.01;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <TextTshirt
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text"
          ref={inputRef}
        />
        <div className="space-x-3">
          <Button className={"mt-3 bg-primary text-black"} onClick={handleAddText}>
            Add Text
          </Button>
          <Button
            className={"bg-primary text-black"}
            onClick={handleColorButtonClick}
          >
            Color
          </Button>
        </div>
      </div>
      {showColorPicker && (
        <div className="mt-2">
          <ChromePicker
            color={snap.textDecal.textcolor}
            onChange={handleColorChange}
            disableAlpha={true}
          />
        </div>
      )}

      <div className="mt-4 ">
        <label className="mr-2 font-bold">Font Size:</label>
        <div className="flex">
          <button
            onClick={() => handleFontSizeUpdate(1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-blue-700 hover:text-white"
          >
            ↑
          </button>
          <button
            onClick={() => handleFontSizeUpdate(-1)}
            className="border border-gray-400 rounded-full px-3 py-1 hover:bg-blue-700 hover:text-white"
          >
            ↓
          </button>
        </div>
      </div>
      <div className="mt-4">
        <label className="mr-2 font-bold">Position:</label>
        <div className="flex">
          <button
            onClick={() => handlePositionUpdate(0, -0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-blue-700 hover:text-white"
          >
            →
          </button>
          <button
            onClick={() => handlePositionUpdate(0, 0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-blue-700 hover:text-white"
          >
            ←
          </button>
          <button
            onClick={() => handlePositionUpdate(1, 0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 mr-2 hover:bg-blue-700 hover:text-white"
          >
            ↑
          </button>
          <button
            onClick={() => handlePositionUpdate(1, -0.1)}
            className="border border-gray-400 rounded-full px-3 py-1 hover:bg-blue-700 hover:text-white"
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizerText;
