const AnswerFillInput = ({handleChange, fillAlert, userInput, index, userStep}) => {
    return (
        <>
        {index === 0 ? <input type="text" id="name" name="name" value={userInput.userName} className="name-input" onChange={handleChange} /> : null}
        
        {userStep === 2 ? <input type="text" id="project-name" name="project-name" onChange={handleChange} value={userInput.projectName} className="name-input"  /> : null}

        {fillAlert ? <div className="alert">Please fill in an answer</div> : null}
        </>
    )
}

export default AnswerFillInput;