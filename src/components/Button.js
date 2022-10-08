import React from 'react';

const Button = (props) => {

    //refactoring props
    const {handleClick, activeStep} = props;

    //setting button text
    const buttonText = activeStep === 3 ? "Launch Eden" : "Create Workspace";

    return (
        <button className='fluid ui button colorblue' onClick={handleClick}>{buttonText}</button>
    )
}

export default Button;