import React from "react";
import { useState } from "react";
function ToggleText(){
    const[isHello, setisHello] = useState(true);
    function toggle (){
        setisHello(!isHello)
    }

    return(
        <div>
            <h2>{isHello ? "Hello": "Goodbye"}</h2>
            <button onClick={toggle}>Toggle Text</button>
        </div>
    );
}
export default ToggleText;