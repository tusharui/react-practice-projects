import React from "react";
import { useState } from "react";

function Counter (){
    const[count, setCount] = useState(0);
    function reset (){
        setCount(0);
    }

    return(
        <div>
            
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={() =>setCount(count-1)}>decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
export default Counter;