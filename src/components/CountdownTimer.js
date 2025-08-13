import React ,{useState,useEffect} from "react";
function Timer(){
const [seconds ,  setSecond] = useState(0);

useEffect(()=>{
    const interviewId = setInterval(()=>{
        setSecond(prev => prev+1);

    }, 1000);

    return()=>{
        clearInterval(interviewId);
    }
},[]);

return (
    <div>
        <h2>Timer : {seconds} seconds</h2>
    </div>
);
}

export default Timer;
