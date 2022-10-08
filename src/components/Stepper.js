import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

import Form from './Form';
import Workspace from './Workspace';
import Final from './Final';
import Button from './Button';
import { buildQueries } from "@testing-library/react";


const RenderStepper = () => {

    const [activeStep, setActiveStep] = useState(0);  //state for active step
    const [userInput, setUserInput] = useState("");   //state for all user input/selections

    //moving forward to the next step
    const handleNextStep = () => {
        return (activeStep <= 2 ? setActiveStep(activeStep + 1) : setActiveStep(0));
    };

    //stepper color configuration
    const stepStyleConfig = {
        activeBgColor: "rgb(102,77,229)",
        completedBgColor: "rgb(102,77,229)"
    };

    return (
        <div>
            
            {/*stepper from react-form-stepper */}
            <div className='stepper'>
                <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
                    {/*allowing user to treverse backward through steps*/}
                    <Step onClick={(e) => { setActiveStep((e.target.innerText) - 1) }} />
                    <Step onClick={(e) => { setActiveStep((e.target.innerText) - 1) }} />
                    <Step onClick={(e) => { setActiveStep((e.target.innerText) - 1) }} />
                    <Step />
                </Stepper>
            </div>

            {/*showing components on basis of activeStep, that is a state */}
            {activeStep === 0 ? <Form
                firstText='Welcome! First things first...'
                desc='You can always change them later.'
                firstLabel='Full Name'
                secondLabel='Display Name'
                firstPlaceHolder='Steve Jobs'
                secondPlaceHolder='Steve'
                activeStep={activeStep}
                handleNextStep={handleNextStep}
                userInput={userInput}
                setUserInput={setUserInput}
            /> : ""}
            {activeStep === 1 ? <Form
                firstText={`let's set up a home for all your work`}
                desc='You can always create another workspace later.'
                firstLabel='Workspace Name'
                secondLabel='Workspace URL (optional)'
                firstPlaceHolder='Eden'
                secondPlaceHolder1='www.eden.com/'
                secondPlaceHolder2='Example'
                activeStep={activeStep}
                handleNextStep={handleNextStep}
                userInput={userInput}
                setUserInput={setUserInput}
            /> : ""}
            {activeStep === 2 ? <Workspace
                handleNextStep={handleNextStep}
                userInput={userInput}
                setUserInput={setUserInput}
            /> : ""}
            {activeStep === 3 ? <Final
                activeStep={activeStep}
                name={userInput?.["Display Name"]}
                handleNextStep={handleNextStep}
                userInput={userInput}
                setUserInput={setUserInput}
            /> : ""}
        </div>
    );
}


export default RenderStepper;