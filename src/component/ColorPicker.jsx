import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store';
import "../index.css"
const ColorPicker = () => {
  const snap = useSnapshot(state);

  const handleFrontColorChange = (color) => {
    state.frontColor = color.hex;
  };

  const handleBackColorChange = (color) => {
    state.backColor = color.hex;
  };

  const handleSleevesColorChange = (color) => {
    state.sleevesColor = color.hex;
  };
  return (
    <div className="colorpickermodal rounded overflow-hidden shadow-lg">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker