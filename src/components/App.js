import { logDOM } from '@testing-library/react';
import React from 'react';

import RenderStepper from './Stepper';
import logo from '../logo.png';


const App = () => {
    return (
        <div className='ui container parent' >
            {/*desplaying header with logo */}
            <div className="header">
                <img src={logo}></img>
                <h1 style={{ marginBottom: "23px" }}>
                    Eden
                </h1>
            </div>
            {/*form with stepper */}
            <div>
                <RenderStepper />
            </div>
        </div>
    )
}

export default App;