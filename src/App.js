import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [parameters, setParameters] = useState({
    isChecked: false,
    disabled: false
  });

  const handleChange = (e) => {
    setParameters({
      ...parameters,
      isChecked: e.target.checked
    });
  };

  return (
    <div className="App">
      {console.log("hello")}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={1} type="checkbox" onChange={handleChange} />
      {parameters.isChecked ? "yes" : "no"}
    </div>
  );
}
