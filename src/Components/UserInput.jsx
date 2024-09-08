
const UserInput = ({onChangeinput,userInput}) => {

  return (
<section id="user-input">
    <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input type='number'
            value={userInput.initialInvestment}
            onChange={(event)=>onChangeinput('initialInvestment' , event.target.value)} required/>
        </p>
        <p>
            <label>Anual Investment</label>
            <input  type='number' 
             value={userInput.annualInvestment}
             onChange={(event)=>onChangeinput('annualInvestment' , event.target.value)}
            required/>
        </p>
    </div>
    <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input type='number' 
             value={userInput.expectedReturn}
             onChange={(event)=>onChangeinput('expectedReturn' , event.target.value)}
            required/>
        </p>
        <p>
            <label>Duration</label>
            <input  type='number' 
             value={userInput.duration}
             onChange={(event)=>onChangeinput('duration' , event.target.value)}
            required/>
        </p>
    </div>

</section>
  )
}

export default UserInput
