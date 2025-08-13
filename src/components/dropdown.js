import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value=""> Select an option </option>
        <option value="apple">Apple </option>
        <option value="banana">Banana </option>
        <option value="orange">Orange </option>
      </select>
      <p>Selected: {selectedOption || "None"}</p>
    </div>
  );
}

export default Dropdown;
