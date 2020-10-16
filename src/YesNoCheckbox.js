import React, { useState } from "react";

const YesNoCheckbox = () => {
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
    <> {/* Fragment */}
      <input value={1} type="checkbox" onChange={handleChange} />
      {parameters.isChecked ? "yes" : "no"}
    </>
  )
}

export default YesNoCheckbox
