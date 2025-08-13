import React from "react";
import { useState } from "react";
function PasswordShow(){
    const [show , setShow] = useState(false);

    function toggleShow(){
        setShow(!show)

    }
    return(
        <div>
            <input type={show ? "text":"password"} placeholder ="enter your password "/>
            <button onClick ={toggleShow} >
                {show ? "Hide": " Show"} Password
            </button>
        </div>
    )


}
export default PasswordShow