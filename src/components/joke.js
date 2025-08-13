import React from "react";
import {useEffect,useState} from "react";

function PjJoke(){
    const[isjoke,setIsjoke] = useState("");

    useEffect(()=>{
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data =>{
            setIsjoke(data.setup +"-"+ data.punchline);
        });
    },[]);

    return(
        <div>
            <h2>Random Joke </h2>
            <p>{isjoke}</p>
        </div>
    )
    
}
export default PjJoke;