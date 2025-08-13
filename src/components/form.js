import React, {useState} from "react";
function EmailValidationForm (){
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleChange(e){
        setEmail(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (email.includes("@")){
            setMessage("Valid email ");

        }else{
            setMessage("Invalid email! missing @");

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="enter your email"
            value = {email}
            onChange = {handleChange}
            
            />

            <button type = "submit">submit </button>
            <p>{message}</p>
        
        </form> 
    );
}

export default EmailValidationForm;
