import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [parameters, setParameters] = useState({
    isChecked: false,
    disabled: false
  });
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setParameters({
      ...parameters,
      isChecked: e.target.checked
    });
  };

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={1} type="checkbox" onChange={handleChange} />
      {parameters.isChecked ? "yes" : "no"}
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <div style={{
        color: inputValue.length > 3 ? 'green' : 'red'
      }}>color</div>
    </div>
  );
}
