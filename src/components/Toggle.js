import React, { useState } from "react";

function ToggleText() {
  const [isHello, setIsHello] = useState(true);
  const [isDark, setIsDark] = useState(true);

  function toggle() {
    setIsHello(!isHello);
  }

  function changeColor() {
    setIsDark(!isDark);
  }

  return (
    <div>
      <h2 style={{ color: isDark ? "#000000" : "#FF0000" }}>
        {isHello ? "Hello" : "Goodbye"}
      </h2>
      <button onClick={toggle}>Toggle Text</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ToggleText;
