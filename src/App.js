import React from "react";
// import Counter from "./components/Counter";
import ToggleText from "./components/Toggle";
import PasswordShow from "./components/Password";
import EmailValidationForm from "./components/form";
import CharacterCounter from "./components/charcount";
import Dropdown from "./components/dropdown";
import PjJoke from "./components/joke";
import Timer from "./components/CountdownTimer";
import AppRoutes from "./routes/AppRoutes";

function App(){
  return(
    <div>
    <h1>React </h1>
    {/* <Counter/> */}
    <ToggleText/>
    <PasswordShow/>
    <EmailValidationForm/>
    <CharacterCounter/>
    <Dropdown/>
    <PjJoke/>
    <Timer/>
    <AppRoutes/>
    </div>
  );
}

export default App; 