import React from 'react';

import Button from './Button';


const Final = (props) => {

    //refactoring props
    const {activeStep, setUserInput, userInput, handleNextStep, name} = props;

    //redirecting to the first step of form and removing userInput data on final sumbission.
    const handleSubmit = () => {
        setUserInput({});
        handleNextStep();
    }

    return (
        //congratulating on form submission
        <div className="center padding align margin">
            <i className='huge check circle icon icon-color' />
            <h1>{`Congratulations, ${name}!`}</h1>
            <p className = 'grey'>You have completed onboarding, you can start using Eden!</p>
            <br />
            <Button activeStep={activeStep} handleClick={handleSubmit} />
        </div>
    )
}

export default Final;