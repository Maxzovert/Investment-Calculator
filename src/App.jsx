import { useState } from "react";
import Header from "./Components/Header.jsx"
import UserInput from "./Components/UserInput.jsx"
import Results from "./Components/Results.jsx";

function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
    });

    function handleChange(inputIdentifier , newValue){
      setUserInput(prevUserInput =>{
          return {
              ...prevUserInput,
              [inputIdentifier] : +newValue
          }
      })
  }

  const valudInput = userInput.duration >= 1;

  return (
    <>
    <Header/>
    <UserInput onChangeinput={handleChange} userInput={userInput}/>
    {!valudInput && <p className="center">Please Enter a valid Input Data</p>}
    {valudInput && <Results inputs={userInput} />}
    </>
  )
}

export default App
