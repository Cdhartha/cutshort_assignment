import React, { useState } from 'react';

import Button from './Button';


const UserForm = (props) => {

    //refactoring props
    const { firstText, desc, firstLabel, secondLabel, firstPlaceHolder, secondPlaceHolder, activeStep, handleNextStep, userInput, setUserInput, secondPlaceHolder1, secondPlaceHolder2 } = props;
    
    const [error, setError] = useState({});  //state for validation error

    //updating state on input change and storing value
    const onInputChange = (evt) => {
        const value = evt.target.value;
        setUserInput((prevState) => ({
            ...prevState,
            [evt.target.name]: value
        }));
    }

    //rendering form validation errors
    const renderError = (userInput) => {
        if (!userInput[firstLabel] && !userInput[secondLabel]) {
            setError({ firstLabel: `Please fill ${firstLabel}`, secondLabel: `Please fill ${secondLabel}` });
        }

        else {
            !userInput[firstLabel] ? setError({ firstLabel: `Please fill ${firstLabel}` }) : setError({ secondLabel: `Please fill ${secondLabel}` });
        }
        return error;
    }

    //individual step form submission, proceeding to next step if all details are filled in that step
    const handleSubmit = () => {
        if (userInput[firstLabel] && userInput[secondLabel]) {
            handleNextStep();
        }
        else {
            //form validation
            renderError(userInput);
        }
    }

    return (
        <div>
            <div className="center padding">
                <h1 className='black'>{firstText}</h1>
                <p className='grey'>{desc}</p>
            </div>
            {/*input form*/}
            <div className="ui form align grey">
                <div className="field">
                    <label>{firstLabel}</label>
                    <input type="text" name={firstLabel} value={userInput[firstLabel]} placeholder={firstPlaceHolder} onChange={onInputChange} />
                    <div className={!userInput[firstLabel] ? "validation" : "hidden"}>{error?.firstLabel}</div> {/*validation error */}
                </div>
                <div className="field">
                    <label>{secondLabel}</label>
                    {/*conditional rendering for the second input field in 2nd step*/}
                    {props.activeStep === 0 ?
                        <div>
                            <input type="text" name={secondLabel} value={userInput[secondLabel]} placeholder={secondPlaceHolder} onChange={onInputChange} />
                            <div className={!userInput[secondLabel] ? "validation" : "hidden"}>{error?.secondLabel}</div> {/*validation error */}
                        </div>
                        :
                        <div>
                            <div className="ui labeled input">
                                <div className="ui label ">
                                    {secondPlaceHolder1}
                                </div>
                                <input type="text" name={secondLabel} value={userInput[secondLabel]} placeholder={secondPlaceHolder2} onChange={onInputChange} />
                            </div>
                            <div className={!userInput[secondLabel] ? "validation" : "hidden"}>{error?.secondLabel}</div> {/*validation error */}
                        </div>
                    }
                </div>
                <Button handleClick={handleSubmit} />
            </div>
        </div>
    )
}

export default UserForm;

