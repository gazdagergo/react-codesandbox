import React from "react";
import YesNoCheckbox from './YesNoCheckbox';
import ColoredInput from './ColoredInput';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <YesNoCheckbox />
      <ColoredInput />
      <ColoredInput textUnder="another text" />
    </div>
  );
}
