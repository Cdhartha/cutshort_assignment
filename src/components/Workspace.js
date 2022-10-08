import React, { useState } from 'react';

import '../style.css'
import Button from './Button';


const Workspace = (props) => {

    //refactoring props
    const { handleNextStep, userInput, setUserInput } = props;

    const [error, setError] = useState("");  //state for validation error
    
    //updating state and storing user preference on profile selection
    const onSelection = (id) => {
        if (!userInput.id) {
            document.getElementById(id).style.border = "1px solid rgb(102,77,229)"
            setUserInput((prevState) => ({
                ...prevState,
                id: id
            }));
        }
        else if (userInput.id != id) {
            document.getElementById(userInput.id).style.border = "1px solid grey"
            document.getElementById(id).style.border = "1px solid rgb(102,77,229)"
            setUserInput((prevState) => ({
                ...prevState,
                id: id
            }));;
        }

    }

    //individual step form submission, proceeding to next step if box is selected in that step
    const handleSubmit = () => {
        if (userInput.id) {
            handleNextStep();
        }
        else {
            //setting validation error state
            setError("Pleases select one option");
        }
    }

    return (
        <div>
            <div className="center padding">
                <h1 className='black'>How are you planning to use Eden?</h1>
                <p className='grey'>We'll steamline your setup experience accordingly.</p>
            </div>
            {/*rendering selection box*/}
            <div className='align'>
                <div className='parent-grid'>
                    <div id="user" onClick={() => onSelection("user")} className={`grid-child ${userInput.id === "user" ? "selected" : ""}`}>
                        <i className={`large user icon ${userInput.id === "user" ? "icon-color" : ""}`} />
                        <div>
                            <div className='heading'>For myself</div>
                            <p className='grey'>Write better. Think more clearly. Stay organized.</p>
                        </div>
                    </div>
                    <div id="users" onClick={() => onSelection("users")} className={`grid-child ${userInput.id === "users" ? "selected" : ""}`}>
                        <i className={`large users icon ${userInput.id === "users" ? "icon-color" : ""}`} />
                        <div>
                            <div className='heading'>With my team</div>
                            <p className='grey'>Wikis, docs, tasks & projects, all in once place.</p>
                        </div>
                    </div>
                </div>
                <div className={!userInput.id ? "validation" : "hidden"}>{error}</div> {/*vaidation error*/}
                <Button handleClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Workspace;