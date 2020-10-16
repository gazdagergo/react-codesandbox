import React, { useState } from "react";

const ColoredInput = ({ textUnder = 'color' }) => {
  const [inputValue, setInputValue] = useState('')


  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <div style={{
        color: inputValue.length > 3 ? 'green' : 'red'
      }}>{textUnder}</div>
    </>
  )
}

export default ColoredInput
