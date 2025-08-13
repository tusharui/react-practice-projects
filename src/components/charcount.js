import React, {useState} from "react";
function CharacterCounter(){
    const [text, setText] = useState("");
    function handleChange(e){
    setText(e.target.value);
    }

    return (
        <div>
            <input 
            type="text"
            placeholder="type something...."
            value = {text}
            onChange={handleChange}
            />

            <p>Character Count :{text.length}</p>
        </div>
    );
}

export default CharacterCounter;